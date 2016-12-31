/**
 * Created by Adeeb on 12/31/2016.
 */

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                console.log(newEventForm);
            }
        }

        $scope.cancelEvent = function () {

        }
    });