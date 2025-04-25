var map = L.map('map', {
    center: [12.295810, 76.639381],
    zoom: 13
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Her Safety'
}).addTo(map);


L.Control.geocoder({
    defaultMarkGeocode: true,
    placeholder: "Search a place...",
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);


var addressPoints = [
    [12.2958, 76.6394, 100],  // Mysore Palace
    [12.3072, 76.6552, 7],    // Chamundi Hill
    [12.3150, 76.6400, 3],    // Mysore Zoo
    [12.3012, 76.6382, 8],    // St. Philomena's Church
    [12.3062, 76.6497, 200],  // Jaganmohan Palace
    [12.2745, 76.6469, 50],   // Karanji Lake
    [12.3125, 76.6700, 9],    // Lalitha Mahal Palace
    [12.3071, 76.6383, 5],    // Devaraja Market
    [12.3256, 76.6238, 6],    // Railway Museum
    [12.3158, 76.6411, 500],  // Regional Museum
    [12.2900, 76.6200, 3],    // Outer Ring Road
    [12.3000, 76.6600, 7],    // Siddhartha Layout
    [12.3100, 76.6300, 1],    // Nazarbad
    [12.3200, 76.6450, 2],    // Gokulam
    [12.2800, 76.6550, 500],  // Vidyaranyapuram
    [12.3400, 76.6200, 8],    // Hebbal
    [12.2700, 76.6400, 0],    // Alanahalli
    [12.3050, 76.6750, 6],    // Bannimantap
    [12.3000, 76.6500, 2],    // Chamundipuram
    [12.2950, 76.6300, 4],    // Lakshmipuram
];

// Create heatmap
var heat = L.heatLayer(addressPoints, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
    gradient: {
        0.0: 'blue',
        0.2: 'lime',
        0.4: 'yellow',
        0.6: 'orange',
        1.0: 'red'
    }
}).addTo(map);
