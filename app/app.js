'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'myApp.authService',
  'myApp.view1',
  'myApp.view2',
  'myApp.viewLogin'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
   /* .when(
      '/', {
        redirectTo: '/home'
      })*/
    .when('/yo', {
      templateUrl: 'view1/view1.html'
    })

    .when('/test', {
      templateUrl: 'view2/view2.html'
      //controller : "ViewLoginCtrl"
    }) /*
    .when('/login', {
      templateUrl: 'templates/login.html'
    })
    .when('/news', {
      templateUrl: 'templates/news.html'
    })
    .when('/news/archive', {
      templateUrl: 'templates/newsarchive.html'
    })*/

  $routeProvider.otherwise({redirectTo: '/viewLogin'});
}]);