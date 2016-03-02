angular.module('foodTruck')
  .controller('coordsCtrl', coordsCtrl);

  coordsCtrl.$inject = ['FoodTruckCoords'];
  function coordsCtrl (FoodTruckCoords) {
    var vm = this;
    var longAndLats = [];
    vm.address = {
        'addressLine': '',
        'city': '',
        'state': '',
        'zipCode': ''
    };
    // NgMap.getMap().then(function(map) {
    //     console.log(map.getCenter());
    // })
  // gets truck info using function from factory
    function init() {
      FoodTruckCoords.getFoodTruckInfo()
        .success(function(data) {
          vm.truckInfo = data;
          for (var i = 0; i < data.length; i++) {
            if (data[i]['location']) {
              longAndLats.push([data[i]['applicant'], data[i]['location']['latitude'], data[i]['location']['longitude']])
            }
          }
          console.log(data);
          console.log(longAndLats);
        })
    }

        //should this be in a factory?
    vm.submit = function() {
        // need to send this address to google API that will turn it into long and
        var fullAddress = vm.address.addressLine + ', ' + vm.address.city + ' ' + vm.address.state + ', ' + vm.address.zipCode;

        // code to find long and lat based on user address
        function searchAddress() {
            console.log('INSIDE SEARCH ADDRESS!!');
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({address: fullAddress}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    map.setZoom(17)
                } else {
                    alert('Something messed up! It was due to: ' + status);
                }
            console.log('STATUS', status);
            console.log('RESULTS', results);
            })
        }
        console.log('FULL ADDRESS', fullAddress);
        console.log(vm.address);
        vm.address.addressLine = '';
        vm.address.city = '';
        vm.address.state = '';
        vm.address.zipCode = '';
        searchAddress();
    }
    init();
  }

    // need to put in a controller to push the longs and lats that were stored in the init fn

  //commenting out for now -CS

  // .controller('mapCoordCtrl', ['FoodTruckCoord', function(FoodTruckCoord){
  //   for (var i = 0; i < longAndLats.length; i++) {

  //   }
  // }])




