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

fetch("https://yashdb18-hersafety.hf.space/app/get_maps_data")
    .then(async (res) => {
        data = await res.json()
        let addressPoints = JSON.parse(data.data)
        console.log(addressPoints)
        addressPoints = addressPoints.map(point => {
            point[2] *= 100;
            return point;
        });


        let lessThan5 = addressPoints.filter(point => point[2] < 500);  // originally less than 5
        let greaterOrEqual5 = addressPoints.filter(point => point[2] >= 500);
        var heat1 = L.heatLayer(lessThan5, {
            radius: 25,
            blur: 15,
            maxZoom: 17,
            gradient: { 0.5: "#E9D512" }
        }).addTo(map);

        var heat2 = L.heatLayer(greaterOrEqual5, {
            radius: 30,
            blur: 15,
            maxZoom: 17,
            gradient: { 0.5: 'red' }
        }).addTo(map);
    })

    .catch((err) => {
        console.log(err);
    })


// Create heatmap
