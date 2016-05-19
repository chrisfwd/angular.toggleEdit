(function(angular){
    "use strict";

    angular
        .module('app', [
            'ngAnimate',
            'ngRoute',
            'app.textInput',
            'app.form',
            'app.personService'])

        .config(['$routeProvider', routeProvider]);



    function routeProvider($routeProvider){

        $routeProvider.otherwise({redirectTo: '/form'});

    }

})(window.angular);