// I think this should actually be a factory? Then we can use the data
// we get from the get request inside the controllers?
angular.module('foodTruck')
    .factory('FoodTruckCoords', ['$http', function($http){
        this.getFoodTruckInfo = function() {
            $http.get('https://data.sfgov.org/resource/rqzj-sfat.json')
                .success(function(data) {
                    console.log(data);
                });
            };
        }]);