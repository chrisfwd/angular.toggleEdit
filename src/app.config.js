(function(angular){
    "use strict";

    angular
        .module('app')

        .config(['$routeProvider', routeProvider]);



    function routeProvider($routeProvider){

        $routeProvider.otherwise({redirectTo: '/form'});

    }

})(window.angular);