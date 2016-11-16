'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.authService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ 'authService', '$scope', function( auth, $scope ) {

  var vm = $scope;
  vm.name = auth.user.username;
  vm.login = function() {
    auth.login( vm.user  );
  };
}]);