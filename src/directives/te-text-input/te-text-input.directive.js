/**
 * Created by clindsey on 5/18/2016.
 */

(function(){
    "use strict";

    angular.module('teTextInput', [])
        .directive('teTextInput', teTextInputDirective);
            
    function teTextInputDirective() {
        return {
            restrict: 'EA',
            scope: {
                label: '=teLabel',
                value: '=teValue',
                isEditable: '=teIsEditable',
                form: '=teForm',
                inputName: '=teInputName',
                inputType: '=teInputType'
            },
            link: linkFunction,
            templateUrl: 'directives/te-text-input/te-text-input.directive.html'
        };

        function linkFunction(scope, element, attrs, controllers) {

        }
    }

})();