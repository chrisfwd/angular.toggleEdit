(function(angular){
    "use strict";

    angular
        .module('app', ['ngAnimate', 'teTextInput'])
        .controller('AppController', AppController)
        .factory('formService', formService);;

    AppController.$inject = ['formService'];

    function AppController(formService) {

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
            return formService.getPerson();
        }

    }

    function formService(){

        return {
            getPerson: getPerson
        };

        function getPerson(){
            debugger;
            return {
                firstName: "Chris",
                lastName: "Lindsey",
                email: "chris@gmail.com"
            };
        }

    }

})(window.angular);