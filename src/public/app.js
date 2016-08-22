var tinyUrlApp = angular.module('tinyUrlApp', ['ngRoute']);

tinyUrlApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .when('/urls/:shortUrl', {
            templateUrl: 'views/shorturl.html',
            controller: 'shortUrlController'
        });
});

tinyUrlApp.controller('homeController', ['$scope', function ($scope) {

}]);

tinyUrlApp.controller('shortUrlController', ['$scope', function ($scope) {

}]);