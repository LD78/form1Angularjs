angular.module('myApp.authService', [])
    .factory('authService', authService);


// attention $http pour serveur pour nous il faudra injecter un $location
authService.$inject = ['$http'];


function authService($http) {

    var host = 'http://localhost:2000';
    var user = { username : "natsu"};

    var userList = [
      { guillaume: "banane" },
      { louis: "bonobo" },
      { david: "ananas" },
      { angular: "js" }
    ]

    var service = {
        login: login,
        //loginTest: loginTest,
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

    if (service.user.username == user){
        alert('Salut Natsu');
/*
      var arrayOfObjects = [
        {"id":28,"Title":"Sweden"},
        {"id":56,"Title":"USA"},
        {"id":89,"Title":"England"}
        ];

      for (var i = 0; i < arrayOfObjects.length; i++) {
        var object = arrayOfObjects[i];
        for (var property in object) {
          alert('item ' + i + ': ' + property + '=' + object[property]);
        }
        // If property names are known beforehand, you can also just do e.g.
        // alert(object.id + ',' + object.Title);
      }*/
    };
  }

    return service;

}