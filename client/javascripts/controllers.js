angular.module('foodTruck')
    .controller('coordsCtrl', ['FoodTruckCoords', function(FoodTruckCoords){
        var vm = this;
        // gets truck info using function from factory
        function init() {
            FoodTruckCoords.getTruckInfo.success(function(data) {
                vm.truckInfo = data;
            })
        }
    }]);