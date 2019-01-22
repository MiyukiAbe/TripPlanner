console.log("Hello WOrld")

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoibWl5dWtpYWJlIiwiYSI6ImNqcjg5cXJoazA0MWU0Ym1sMW4xcWwxemoifQ.aXgaZpBL7xOnlr8DNvOc2A";

// const map = new mapboxgl.Map({
//     container: "map",
//     center: [-74.009, 40.705],
//     zoom: 12,
//     style: "mapbox://styles/mapbox/streets-v10"
// }); 


// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = '../public/marker.png';
// console.log(markerDomEl)
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

//mapboxgl.accessToken = "pk.eyJ1IjoiY2Fzc2lvemVuIi...A4dGQyNnN1ZifQ.0ZIRDup0jnyUFVzUa_5d1g";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div");
// markerDomEl.className = marker;
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


const buildMarker = require("./marker");

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);