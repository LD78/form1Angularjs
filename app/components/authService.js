angular.module('myApp.authService', [])
    .factory('authService', authService);

authService.$inject = ['$http'];

function authService($http) {
    var host = 'http://localhost:2000';
    var user = { username : "claude"};

    var service = {
        login: login,
        user: user
    };

    // user = { password, username }
    function login(user){

        service.user.username = "kevin";

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

    return service;


}