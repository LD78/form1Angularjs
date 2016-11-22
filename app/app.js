'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.authService',
  'myApp.view1',
  'myApp.view2',
  'myApp.viewLogin',
  'myApp.viewPostLog'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
   /* .when(
      '/', {
        redirectTo: '/home'
      })*/
    .when('/viewPostLog', {
      templateUrl: 'viewPostLog/viewPostLog.html'
    })

    .when('/test', {
      templateUrl: 'view2/view2.html'
      //controller : "ViewLoginCtrl"
    })

    .when('/viewLogin', {
      templateUrl: 'viewLogin/viewLogin.html'
    })
  /*
    .when('/news', {
      templateUrl: 'templates/news.html'
    })
    .when('/news/archive', {
      templateUrl: 'templates/newsarchive.html'
    })*/

  $routeProvider.otherwise({redirectTo: '/viewLogin'});
}]);