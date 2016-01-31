angular.module('foodTruck')
    .controller('coordsCtrl', ['FoodTruckCoords', '$scope', function(FoodTruckCoords, $scope){
        var vm = this;
        var longAndLats = [];
        // gets truck info using function from factory
        // all the long and lats are the same, is this the right data?
        function init() {
            FoodTruckCoords.getFoodTruckInfo()
                .success(function(data) {
                    vm.truckInfo = data;
                    for (var i = 0; i < data.length; i++) {
                    if (data[i]['location']) {
                        longAndLats.push([data[i]['location']['latitude'], data[i]['location']['longitude']])
                        }
                    }
                    console.log(longAndLats);
                })
            }

        function submit() {
            var address = $scope.address;
            console.log(address)
        }
        init();
    }])