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
})