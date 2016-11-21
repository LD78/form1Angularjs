'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.authService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

  // $scope est identique à this
.controller('View2Ctrl', ['$scope', 'authService', function( $scope, auth ) {
  var vm = $scope;
  vm.name = auth.user.username;
  vm.displayName = function() {
    alert(vm.name + "");
  }

  vm.addName = function() {
     vm.userList.push({ name: vm.name });
  };


  vm.userList = [
    { name: "name1" },
    { name: "name2" },
    { name: "name3" }
  ]
}]);