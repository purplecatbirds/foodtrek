angular.module('foodTruck', ['ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '../views/home.html'
                })
            $urlRouterProvider.otherwise('home');
        }]);