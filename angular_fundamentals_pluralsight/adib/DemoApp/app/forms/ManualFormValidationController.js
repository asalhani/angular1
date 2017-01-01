'use strict';

var eventsApp = angular.module("eventsApp");

eventsApp.controller('ManualFormValidationController', function ManualFormValidationController($scope) {
    
    $scope.submitForm = function(isValid){
        if(isValid){
            alert('form is valid and submitted..');
        }
    }

});