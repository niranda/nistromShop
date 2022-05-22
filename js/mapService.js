import { getMap } from "./map.js";

var x = document.getElementById("location-text");
getLocation();
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Геолокация не поддерживается этим браузером.";
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var currentPosition = [lat, lon];
  if (window.location.pathname == "/index.html") {
    getMap(currentPosition, "Вы здесь");
  }
  x.innerHTML =
    "Ваше местоположение " + "<br>Широта: " + lat + "<br>Долгота: " + lon;
}
