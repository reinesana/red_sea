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

  useEffect(() => {
    if (map) {
      // Array of hospital data containing coordinates, names, and image URLs
      const hospitals = [
        {
          name: "European Gaza Hospital",
          coordinates: [34.319611652471, 31.303419882672],
          imageUrl:
            "https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg",
        },
        {
          name: "Abu Yousef Alnajaar Hospital",
          coordinates: [34.272854864692, 31.273284110358],
          imageUrl:
            "https://images-ext-2.discordapp.net/external/qJ4I7pBm21EzcximxO3lEB5uudS_NhyBySfGO6-dUOA/%3Fpanoid%3DHs9IVlOtamgTencZcRKpcA%26cb_client%3Dsearch.gws-prod.gps%26w%3D408%26h%3D240%26yaw%3D329.34808%26pitch%3D0%26thumbfov%3D100/https/streetviewpixels-pa.googleapis.com/v1/thumbnail?format=webp&width=816&height=480",
        },
        {
          name: "Dar Al-Shifa Hospital",
          coordinates: [34.443345125134, 31.524181390565],
          imageUrl: "https://www.daralshifa.com.bh/storage/images/img_012.jpeg",
        },
        {
          name: "Indonesian Hospital",
          coordinates: [34.509292024246, 31.535066626413],
          imageUrl:
            "https://www.benarnews.org/english/news/indonesian/indonesia-gaza-hospital-not-hamas-base-ngo-says-11062023131809.html/@@images/41e37461-a96e-4345-91c4-6149fdac579d.jpeg",
        },
        {
          name: "Awda Hospital Al Nuseirat",
          coordinates: [34.389073130411, 31.452264498756],
          imageUrl:
            "https://www.pazcondignidad.org/wp-content/uploads/2024/02/IMG_3508.jpg",
        },
      ];
      hospitals.forEach((hospital) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(hospital.name);

        // Create a marker element
        const el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage = `url('${hospital.imageUrl}')`;
        el.style.backgroundSize = "cover";
        el.style.width = "50px";
        el.style.height = "50px";
        el.style.borderRadius = "50%";
        el.style.cursor = "pointer";

        // Create the marker and add it to the map
        new mapboxgl.Marker(el)
          .setLngLat(hospital.coordinates)
          .setPopup(popup)
          .addTo(map);
      });
    }
  }, [map]);

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
            setSearchLocation({ lat, lng });
          }
        })
        .catch((error) => console.error("Error during geocoding:", error));
    }
  };

  return (
    <div>
      <div className="location-input">
        <input
          type="text"
          placeholder="Search for a place"
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          onChange={(e) => setSelectedCamp(camps[parseInt(e.target.value, 10)])}
          className="camp-select"
        >
          <option>Select a Camp</option>
          {camps.map((camp, index) => (
            <option key={index} value={index}>
              {camp.camp}
            </option>
          ))}
        </select>
      </div>
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
