console.log("Hello WOrld")

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

//this is API token.
mapboxgl.accessToken = "pk.eyJ1IjoibWl5dWtpYWJlIiwiYSI6ImNqcjg5cXJoazA0MWU0Ym1sMW4xcWwxemoifQ.aXgaZpBL7xOnlr8DNvOc2A";

//it takes constructor function.
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 15, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

// const markerDomEl = document.createElement("div");
// // markerDomEl.className = marker;
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


const marker = buildMarker("hotels", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);