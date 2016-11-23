angular.module('myApp.authService', [])
    .factory('authService', authService);


// attention $http pour serveur pour nous il faudra injecter un ex: ($location.path(/home)) dans un controller
authService.$inject = ['$http', '$location'];


function authService($http, $location) {

    var host = 'http://localhost:2000';
    var user = { username : "username"};

    var userList = [
      {"username":'guillaume',"password":"banane"},
      {"username":'louis',"password":"ananas"},
      {"username":'david',"password":"mandarine"}
    ];

    var service = {
        changeUserNameService: changeUserNameService,
        checkIdUser: checkIdUser,
        returnLogin: returnLogin,
        user: user
    };

  function changeUserNameService(user){

    service.user.username = user;
  }

  function checkIdUser(user, password){

    for (var i = 0; i < userList.length; i++) {
        if(userList[i].username == user && userList[i].password == password){
            service.user.username = user;
            $location.path('/viewPostLog');
        }
    }
  }

  function returnLogin(){
        $location.path('/viewLogin');
  }

  return service;
}