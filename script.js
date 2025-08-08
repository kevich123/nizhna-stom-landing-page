// Initialize Leaflet map once the page has loaded
window.addEventListener('load', function () {
  // Coordinates for вул. Єжи Ґедройця 6, Київ
  var coords = [50.4198, 30.5231];
  var map = L.map('map').setView(coords, 17);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Add a marker with a popup
  var marker = L.marker(coords).addTo(map);
  marker.bindPopup('Ніжна стоматологія<br>Київ, вул. Єжи Ґедройця 6');
});