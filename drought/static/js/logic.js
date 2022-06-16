
// Create a map object
var myMap = L.map("map", {
  center: [-22.450643, 15.031006],
  zoom: 16
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-v9",
  accessToken: "pk.eyJ1Ijoic2hyZWVzdGluYSIsImEiOiJjbDF2ejU2MGIybmlnM2ptdDV1anpmNDg0In0.TxozhPWkzWDabi7yumg5Ww"
}).addTo(myMap);
 


// Create a circle and pass in some initial options
var circle = L.circle([-22.4437, 15.031], {
  color: "green",
  fillColor: "green",
  fillOpacity: 1.75,
  radius: 20
}).addTo(myMap);

// Binding a pop-up to our marker
circle.bindPopup('<b>Y3-Paddock : ' + 
'</b><hr/><p> Piezo-38: -21.8 kPa'+  
'</p><hr/><p> Piezo-39: 18.74 kPa' +
'</p><hr/><p> Piezo-40: -20.73 kPa' +
'</p><hr/><p> Piezo-41: -5.32 kPa ' +
'</p><hr/><p> Piezo-42: 12.66 kPa </p>'
);

// Create a Polygon and pass in some initial options
var polygon = L.polygon([
  [-22.445580,  15.026153],
  [-22.443881,  15.029943],
  [-22.443772,  15.032197],
  [-22.444422,  15.033510],
  [-22.445768,  15.034832],
  [-22.447223,  15.034570],
  [-22.449174,  15.033773],
  [-22.446727,  15.029205],
  [-22.447865,  15.027708],
], {
  color: "yellow",
  fillColor: "yellow",
  fillOpacity: 0.5
}).addTo(myMap);

polygon.bindTooltip("PADDOCK Y3",
    {permanent: true, direction:"center"}
).openTooltip()

// Coordinates for each point to be used in the polyline
var line = [
  [-22.442561, 15.031541],
  [-22.445042, 15.030404]
];

// Create a polyline using the line coordinates and pass in some initial options
var lineMark = L.polyline(line, {
  color: "red"
}).addTo(myMap)
.bindPopup("<h1> Piezometer Section Y3</h1><p> This section shows the location of the piezometers</p><img src='./static/img/y3.jpg' width = 900/>")
//.openPopup();

// // City marker
// // Assigne URL variable to JSON data
// url = "/api/v1.0/peizometer-readings"

// // Define json data as variable
// var staticData = d3.json(url)

// // Console log to see if data is accessible
// staticData.then(function(data) {
//     console.log(data)
// });
// function buildMarkers (data) {
// for (var i = 0; i < data.metadata.length; i++) {

//     var metadata = data.metadata[i];
//     var marker = L.marker([metadata.Latitud, metadata.Longitud], {
//     draggable: true,
//     title: "Y3 piezometers"
//     }).addTo(myMap);

//     // Binding a pop-up to our marker
//     marker.bindPopup("Y3 Paddock");
//   }
// }


// Create a circle and pass in some initial options
//var circle1 = L.circle([-22.46, 15.03],[-22.353, 15.02], {
  //color: "green",
  //fillColor: "green",
  //fillOpacity: 1.75,
  //radius: 20
//}).addTo(myMap);

// Create a rectangle and pass in some initial options
//L.rectangle([
 // [-37.31, 144.36],
 // [-37.51, 144.56]
//], {
  //color: "black",
  //weight: 3,
  //stroke: true
//}).addTo(myMap);


// // City marker
// // Assigne URL variable to JSON data
// url = "/api/v1.0/peizometer-readings"

// // Define json data as variable
// var staticData = d3.json(url)

// // Console log to see if data is accessible
// staticData.then(function(data) {
//     console.log(data)
// });
// function buildMarkers (data) {
// for (var i = 0; i < data.metadata.length; i++) {

//     var metadata = data.metadata[i];
//     var marker = L.marker([metadata.Latitud, metadata.Longitud], {
//     draggable: true,
//     title: "Y3 piezometers"
//     }).addTo(myMap);

//     // Binding a pop-up to our marker
//     marker.bindPopup("Y3 Paddock");
//   }
// }


// City marker
// Assigne URL variable to JSON data
//python -m http.server

//url = "samples.json"

 // Define json data as variable
 //var staticData = d3.json(url)

 //staticData.then(function(data) {
  //     console.log(data)
  //for (var i = 0; i < data.metadata.length; i++) {
    //var place = data.metadata[i];


    
    // Creating a marker and putting it on the map
    //var customIcon = L.icon({
        //iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
        //iconSize:     [38, 40], 
        //iconAnchor:   [10, 40],
      //  popupAnchor:  [5, -40]
    //}); 
    //var marker = L.marker([-22.44,15.02020495], [-22.45374327,15.02020495],[-22.45374327,15.02020495],[-22.45374327,15.02020495],[-22.45374327,15.02020495],{icon: customIcon});
   // marker.addTo(myMap).bindPopup("Y3");


    // Store API query variables
//var baseURL = "static/data/samples.json";
//var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
//var complaint = "&complaint_type=Rodent";
//var limit = "&$limit=10000";




      // Add a new marker to the cluster group and bind a pop-up
      //markers.addLayer(L.marker([-22.45374327, 15.02020495])
        //.bindPopup(response[i].Status));

  // Add our marker cluster layer to the map
  //myMap.addLayer(markers);


// Assemble API query URL
//var url = baseURL ;

// Grab the data with d3
//d3.json(url).then(function(response) {

  // Create a new marker cluster group
  //var markers = L.markerClusterGroup();

  // Loop through data
 // for (var i = 0; i < metadata.length; i++) {

    // Set the data location property to a variable
  //  var Latitud = metadata[i].Latitud;
 //   var Longitud = metadata[i].Longitud;

    // Check for location property
 //   if (Latitud & Longitud) {

      // Add a new marker to the cluster group and bind a pop-up
  //    markers.addLayer(L.marker([Latitud.Latitud[0], Longitud.Longitud[0]])
  //      .bindPopup(response[i].Status));
  //  }

 // }

      // Add a new marker to the cluster group and bind a pop-up
     // markers.addLayer(L.marker([-22.45374327, 15.02020495])
      //  .bindPopup(response[i].Status));

  // Add our marker cluster layer to the map
 // myMap.addLayer(markers);

//});



   
