/**
 * Created by Yaku on 22/11/2016.
 */

'use strict';

angular.module('myApp.viewPostLog', ['ngRoute', 'myApp.authService'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/viewPostLog', {
      templateUrl: 'viewPostLog/viewPostLog.html',
      controller: 'ViewPostLogCtrl'
    });
  }])

  .controller('ViewPostLogCtrl', ['$scope', 'authService', function( $scope, auth ) {
    var vm = $scope;
    vm.user = auth.user.username;

    vm.returnLoginPage = function() {
      auth.returnLogin();

    };

  }]);