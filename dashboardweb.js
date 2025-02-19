document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("alerts").innerText = "Flood warning in your area.";
        document.getElementById("weather").innerText = "Rainy, 18°C";
    }, 2000);

    var map = L.map('map').setView([37.7749, -122.4194], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
});
