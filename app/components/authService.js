angular.module('myApp.authService', [])
    .factory('authService', authService);


// attention $http pour serveur pour nous il faudra injecter un ex: ($location.path(/home)) dans un controller
authService.$inject = ['$http', '$location'];


function authService($http, $location) {

    var host = 'http://localhost:2000';
    var user = { username : "natsu"};

    var userList = [
      {"username":'guillaume',"password":"banane"},
      {"username":'louis',"password":"ananas"},
      {"username":'david',"password":"mandarine"}
    ];

    var service = {
        login: login,
        changeUserNameService: changeUserNameService,
        checkIdUser: checkIdUser,
        user: user
    };

    // user = { password, username }
    function login(user){

        service.user.username = "XOhohoh";

        return $http.post(host +  '/user/login', user)
            .then(loginComplete)
            .catch(loginFailed);

        function loginComplete(response) {
            return response.data;
        }

        function loginFailed(err) {
            console.log("Error :  " + err.data);
        }
    }

  function changeUserNameService(user){

    service.user.username = user;
  }

  function checkIdUser(user, password){

    for (var i = 0; i < userList.length; i++) {
        if(userList[i].username == user && userList[i].password == password){
            alert('Good Job !!!');
            $location.path('/test');
        }
    }
  }

    return service;
}