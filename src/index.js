console.log("Hello WOrld")

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoibWl5dWtpYWJlIiwiYSI6ImNqcjg5cXJoazA0MWU0Ym1sMW4xcWwxemoifQ.aXgaZpBL7xOnlr8DNvOc2A";

const map = new mapboxgl.Map({
    container: "map",
    center: [~74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
}); 


const markerDomEl = document.createElement('div');
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = '../public/marker.png';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

