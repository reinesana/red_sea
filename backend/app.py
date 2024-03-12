from flask import Flask, jsonify, request
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
import numpy as np
import requests
import pandas as pd
import math
import os

# Get the directory of the current Python script
current_directory = os.path.dirname(os.path.abspath(__file__))

# Define relative paths to CSV files
csv_directory = os.path.join(current_directory, "datasets")
gaza_danger_levels_csv_path = os.path.join(csv_directory, "gaza_danger_levels.csv")
refugee_camps_csv_path = os.path.join(csv_directory, "refugee_camps.csv")

# Import files
df = pd.read_csv(gaza_danger_levels_csv_path)
df_camp = pd.read_csv(refugee_camps_csv_path)

app = Flask(__name__)

# Fetching MAPBOX token
MAPBOX_TOKEN = 'pk.eyJ1IjoiZ3ByZW0wOSIsImEiOiJjbHRmbjhzd3gwcHNpMmxwMWpwdnlja2t6In0.xm3aMSxFMVQkpgJlOFUhVg'

@app.route('/mapbox-token', methods=['GET'])
def get_mapbox_token():
    return jsonify({'mapboxToken': MAPBOX_TOKEN})

# Machine learning KNN model with (LAT,LONG) and associated danger_level
X = df[['LATITUDE', 'LONGITUDE']].values
y = df['overall_danger'].astype(int).values
knn = KNeighborsClassifier(n_neighbors=1)
knn.fit(X, y)

@app.route('/safest-route', methods=['GET'])
def find_safest_route():    
    start_lat = request.args.get('start_lat')
    start_long = request.args.get('start_long')

    end_lat = request.args.get('end_lat')
    end_long = request.args.get('end_long')
    
    if not start_lat or not start_long or not end_lat or not end_long:
        return jsonify({'message': 'Missing end_lat or end_long parameters'}), 400

    url = f"https://api.mapbox.com/directions/v5/mapbox/walking/{start_long},{start_lat};{end_long},{end_lat}?geometries=geojson&alternatives=true&access_token={MAPBOX_TOKEN}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        safest_score = float('inf')
        safest_route = None

        for i, route in enumerate(data['routes']):
            route_score = 0
            coordinates = route['geometry']['coordinates']
            
            for coord in coordinates:
                geometry_coordinates = np.array(coord).reshape(1, -1) 
                safety_level = knn.predict(geometry_coordinates)
                route_score += safety_level[0] 
            if route_score < safest_score:
                safest_score = route_score
                safest_route = route

        if safest_route:
            return jsonify({
                'message': 'Safest route found',
                'distance': safest_route['distance'],
                'duration': safest_route['duration'],
                'safety_score': safest_score.item(),
                'geometry': safest_route['geometry']
            })
    else:
        return jsonify({'message': 'Failed to get data from Mapbox API', 'status_code': response.status_code})

#get locations to refugee camps
@app.route('/locations', methods=['GET'])
def get_locations():
    locations = df_camp.to_dict(orient='records')
    return jsonify(locations)

if __name__ == '__main__':
    app.run(debug=True, port=8000)