angular.module('foodTruck')
    .controller('coordsCtrl', ['FoodTruckCoords', '$scope', function(FoodTruckCoords, $scope){
        var vm = this;
        var longAndLats = [];
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
                    console.log(data)
                    console.log(longAndLats);
                })
            }

        //should this be in a factory?
        vm.submit = function() {
            // need to send this address to google API that will turn it into long and
            var saveAddress = address;
            console.log(saveAddress)
        }
        init();
    }])

    // need to put in a controller to push the longs and lats that were stored in the init fn
    .controller('mapCoordCtrl', ['FoodTruckCoord', function(FoodTruckCoord){
        for (var i = 0; i < longAndLats.length; i++) {
            
        }
    }])




