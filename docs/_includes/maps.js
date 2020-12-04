let map;

 map = new google.maps.Map(document.getElementById("map"), {
    //I Place it in an ID with the ID of div
    center: { lat: 34.2389, lng: -118.528 }, // Coordinates of where the map will be centered
    zoom: 16.8, //zoom level
    draggableCursor: "crosshair" // Make the cursor a crosshair
  });