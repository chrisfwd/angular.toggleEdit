(function(angular){
    'use strict';

    angular
        .module('app', [
            'ngAnimate',
            'ui.router',
            'app.textInput',
            'app.form',
            'app.personService'])

        .config(routeProvider);



    function routeProvider($urlRouterProvider){

        $urlRouterProvider.otherwise('form');

    }

})(window.angular);