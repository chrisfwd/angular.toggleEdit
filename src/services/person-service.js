/**
 * Created by clindsey on 5/19/2016.
 */

(function (angular) {
    'use strict';

    angular.module('app.personService', [])
        .factory('personService', [personService]);


    function personService(){

        return {
            getPerson: getPerson
        };

        function getPerson(){
            return {
                firstName: 'Chris',
                lastName: 'Lindsey',
                email: 'chris@gmail.com',
                friend: 'Jason'
            };
        }

    }
})(window.angular);