var map = new L.Map("mapid", {
	center: new L.LatLng(51.81, -8.8),
	zoom: 8,
	layers: new L.TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
});
var circle = L.circle([51.81, -8.8], {
    color: 'lightblue',
    fillColor: '#f0f8ff',
    fillOpacity: 0.5,
    radius: 25000
}).addTo(map);