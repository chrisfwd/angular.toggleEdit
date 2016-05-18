(function(angular){
    "use strict";

    angular
        .module('app', ['ngAnimate'])
        .controller('AppController', AppController);

    function AppController() {

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
            return {
                firstName: "Chris",
                lastName: "Lindsey",
                email: "clindsey@celerity.com"
            };
        }
    }

})(window.angular);