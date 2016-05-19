/**
 * Created by clindsey on 5/19/2016.
 */

(function(angular){
    'use strict';

    angular.module('app.form', [
        'ngRoute',
        'app.personService'])

        .config(['$routeProvider', routeProvider])

        .controller('FormController', ['personService', FormController]);
    
    

    function routeProvider($routeProvider){

        $routeProvider.when('/form', {
            templateUrl: 'views/form/form.html',
            controller: 'FormController'
        });

    }
    

    function FormController(personService) {

        var vm = this;
        vm.master = getPerson();
        vm.user = angular.copy(vm.master);
        vm.isEditable = false;
        vm.makeEditable = makeEditable;
        vm.update = update;
        vm.cancelChanges = cancelChanges;


        /**
         * public methods
         */

        function makeEditable(){
            vm.isEditable = true;
            return vm.isEditable;
        }

        function update(form){
            if (!form.$valid) {
                return false;
            }
            vm.master = angular.copy(vm.user);
            vm.isEditable = false;
        }

        function cancelChanges(){
            vm.user = angular.copy(vm.master);
            vm.isEditable = false;
            return vm.isEditable;
        }
       
        
        /**
         * private methods
         */

        function getPerson(){
            return personService.getPerson();
        }

    }

})(window.angular);