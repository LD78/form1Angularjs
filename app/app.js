'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.authService',
  'myApp.viewLogin',
  'myApp.viewPostLog'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider

    .when('/viewPostLog', {
      templateUrl: 'viewPostLog/viewPostLog.html'
    })

    .when('/viewLogin', {
      templateUrl: 'viewLogin/viewLogin.html'
    })

  $routeProvider.otherwise({redirectTo: '/viewLogin'});
}]);