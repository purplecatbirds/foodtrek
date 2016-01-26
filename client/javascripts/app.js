angular.module('foodTruck', ['ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'index.html'
                });
            $urlRouterProvider.otherwise('home');
        }]);