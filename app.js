var map = L.map('map', {
    center: [12.295810, 76.639381],
    zoom: 13
});

// Base map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Her Safety'
}).addTo(map);

// Address points with danger levels (0 to 10)
var addressPoints = [
    [12.2958, 76.6394, 100],  // Mysore Palace
    [12.3072, 76.6552, 7],  // Chamundi Hill
    [12.3150, 76.6400, 3],  // Mysore Zoo
    [12.3012, 76.6382, 8],  // St. Philomena's Church
    [12.3062, 76.6497, 200],  // Jaganmohan Palace
    [12.2745, 76.6469, 50],  // Karanji Lake
    [12.3125, 76.6700, 9],  // Lalitha Mahal Palace
    [12.3071, 76.6383, 5],  // Devaraja Market
    [12.3256, 76.6238, 6],
]  // Railway Museum

let addressPoints2 = [[12.3158, 76.6411, 500],  // Regional Museum
[12.2900, 76.6200, 3],  // Near Outer Ring Road
[12.3000, 76.6600, 7],  // Siddhartha Layout
[12.3100, 76.6300, 1],  // Nazarbad
[12.3200, 76.6450, 2],  // Gokulam
[12.2800, 76.6550, 500],  // Vidyaranyapuram
[12.3400, 76.6200, 8],  // Hebbal
[12.2700, 76.6400, 0],  // Alanahalli
[12.3050, 76.6750, 6],  // Bannimantap
[12.3000, 76.6500, 2],  // Chamundipuram
[12.2950, 76.6300, 4],  // Lakshmipuram
];

// Heat layer
var heat = L.heatLayer(addressPoints, {
    radius: 25,
    blur: 15,
    gradient: {
        0.0: 'blue',   // Safe zones (rating 0)
        0.3: 'lime',   // Slight caution (rating ~3)
        0.6: 'yellow', // Moderate caution (rating ~6)
        1.0: 'green'     // Dangerous (rating ~10)
    }
}).addTo(map);

var heat = L.heatLayer(addressPoints2, {
    radius: 25,
    blur: 15,
    gradient: {
        0.0: 'blue',   // Safe zones (rating 0)
        0.3: 'lime',   // Slight caution (rating ~3)
        0.6: 'yellow', // Moderate caution (rating ~6)
        1.0: 'red'     // Dangerous (rating ~10)
    }
}).addTo(map);