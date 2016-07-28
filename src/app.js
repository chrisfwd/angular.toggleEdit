(function(angular){
    'use strict';
    
    angular.module('app.routing', ['ui.router'])
        .config(routeProvider);

    angular
        .module('app', [
            'ngAnimate',
            'ui.router',
            'app.textInput',
            'app.form',
            'app.personService',
            'app.routing']);


    function routeProvider($urlRouterProvider){

        $urlRouterProvider.otherwise('form');

    }

})(window.angular);