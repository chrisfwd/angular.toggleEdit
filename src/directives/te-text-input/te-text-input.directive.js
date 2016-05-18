/**
 * Created by clindsey on 5/18/2016.
 */

(function(){
    "use strict";

    angular.module('teTextInput', [])
        .directive('teTextInput', teTextInputDirective);
            
    function teTextInputDirective() {
        return {
            restrict: 'E',
            scope: {
                label: '=teLabel',
                value: '=teValue',
                isEditable: '=teIsEditable',
                form: '=teForm',
                inputType: '=teInputType',
                isRequired: '=teRequired'
            },
            link: linkFunction,
            templateUrl: 'directives/te-text-input/te-text-input.directive.html'
        };

        function linkFunction(scope, element, attrs, controllers) {
            //debugger;
            scope.inputName = scope.form.$name + "." + scope.label.replace(/ /g,'').toLowerCase() + scope.$id;

        }
    }

})();