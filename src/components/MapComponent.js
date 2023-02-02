import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiamFramFrMjAxMiIsImEiOiJjbGRqNTJldGYxYml6M25vM241ZDljMWt4In0.z5PdjdOH1mGR7_tncC-3Dw";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {},
        layers: [
          {
            id: "background",
            type: "background",
            paint: {
              "background-color": "#F5F5F5"
            }
          }
        ]
      },
      center: [0, 0],
      zoom: 9,
      onViewportChange: viewport => {
        console.log(viewport);
      }
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([0, 0])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML("<p>Hello World!</p>")
      )
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ height: "400px", width: "100%", border: "1px solid black" }}
    />
  );
};

export default MapComponent;
