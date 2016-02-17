$(function initMap(){
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng({lat: 37.7741, lng: -122.4312}),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  setTimeout(function() {
    $('.map-body').append('#map').css('margin-top', '0px').get(0);
  }, 500)
var infoWindow = new google.maps.InfoWindow({map: map});

/* THIS DOESN'T WORK BECAUSE WE'RE NOT IN SAN FRAN!! :( */

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//       console.log(pos)
//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
})

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
