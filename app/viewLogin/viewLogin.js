/**
 * Created by Yaku on 17/11/2016.
 */

'use strict';

angular.module('myApp.viewLogin', ['ngRoute', 'myApp.authService'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/viewLogin', {
      templateUrl: 'viewLogin/viewLogin.html',
      controller: 'ViewLoginCtrl'
    });
  }])

  .controller('ViewLoginCtrl', [ 'authService', '$scope', function( auth, $scope ) {

    // Remarque toutes les variables du scope sont commune entre le html et js
    var vm = $scope;
    vm.userName;
    vm.password;

    vm.nameTest = auth.user.username;
    vm.user;

    vm.loginTest = function() {
      auth.loginTest( vm.user  );
    };

   /* vm.changeUserName = function(user) {
      alert(user);
      //auth.changeUserName(user);
    };*/

    vm.changeUserName = function() {
      auth.changeUserNameService(vm.user);

    };

    vm.result = function() {
        alert(auth.user.username);
    };



    vm.checkId = function() {
      auth.checkIdUser(vm.userName, vm.password);
};
vm.nullId= function() {
	vm.userName=" ";
	vm.password=" ";

    };

  }]);
