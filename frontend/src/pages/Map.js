import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const [map, setMap] = useState(null);
  const [camps, setCamps] = useState([]);
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [searchLocation, setSearchLocation] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    fetch("/mapbox-token")
      .then((response) => response.json())
      .then((data) => {
        mapboxgl.accessToken = data.mapboxToken;
        const initMap = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/gprem09/cltkyes67013v01pt2ob5fgqk",
          center: [34.3824, 31.4227],
          zoom: 10,
        });

        setMap(initMap);

        initMap.on("load", () => {
          fetch("/safest-route")
            .then((response) => response.json())
            .then((data) => {
              const routeGeometry = data.geometry;

              initMap.addSource("route", {
                type: "geojson",
                data: routeGeometry,
              });

              initMap.addLayer({
                id: "route",
                type: "line",
                source: "route",
                layout: {
                  "line-join": "round",
                  "line-cap": "round",
                },
                paint: {
                  "line-color": "#ff0000",
                  "line-width": 3,
                },
              });
            })
            .catch((error) =>
              console.error("Error fetching the safest route:", error)
            );
        });
      });

    fetch("/locations")
      .then((response) => response.json())
      .then((data) => {
        setCamps(data);
      });
  }, []);

  useEffect(() => {
    if (map && selectedCamp) {
      const { LONG: campLng, LAT: campLat } = selectedCamp;

      document
        .querySelectorAll(".mapboxgl-marker")
        .forEach((marker) => marker.remove());

      new mapboxgl.Marker().setLngLat([campLng, campLat]).addTo(map);

      map.flyTo({ center: [campLng, campLat], zoom: 12 });

      fetch(
        `/safest-route?start_lat=${searchLocation.lat}&start_long=${searchLocation.lng}&end_lat=${campLat}&end_long=${campLng}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.geometry) {
            const routeGeometry = data.geometry;
            if (map.getSource("route")) {
              map.getSource("route").setData(routeGeometry);
            } else {
              map.addSource("route", {
                type: "geojson",
                data: routeGeometry,
              });

              map.addLayer({
                id: "route",
                type: "line",
                source: "route",
                layout: {
                  "line-join": "round",
                  "line-cap": "round",
                },
                paint: {
                  "line-color": "#ff0000",
                  "line-width": 3,
                },
              });
            }
          }
        })
        .catch((error) =>
          console.error("Error fetching the safest route:", error)
        );
    }
  }, [map, selectedCamp, searchLocation]);

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    if (searchText.length > 3) {
      // To avoid too many requests, only search if the query is longer than 3 characters
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchText
        )}.json?access_token=${mapboxgl.accessToken}`
      )
        .then((response) => response.json())
        .then((data) => {
          const places = data.features;
          if (places.length > 0) {
            const place = places[0];
            const [lng, lat] = place.center;

            setSearchLocation({ lat, lng }); // Update the state with the new location
          }
        })
        .catch((error) => console.error("Error during geocoding:", error));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a place"
        onChange={handleSearchChange}
      />
      <select
        onChange={(e) => setSelectedCamp(camps[parseInt(e.target.value, 10)])}
      >
        <option>Select a Camp</option>
        {camps.map((camp, index) => (
          <option key={index} value={index}>
            {camp.camp}
          </option>
        ))}
      </select>
      <div
        id="map"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 1,
          width: "100%",
          zIndex: -10,
        }}
      ></div>
    </div>
  );
}
export default Map;
