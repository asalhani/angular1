var submitFormApp = angular.module('SubmitFormApp', ['ngMessages']);

submitFormApp.controller('submitFormController', function submitFormController($scope, UserService) {
    $scope.user = { name: '', email: '' };
    $scope.getUser = function (id) {
        UserService.getUser(id)
            .then(function (response) {
                $scope.user = response.data;
            }, function error(error) {
                console.log(error);
            }
            );
    };
    $scope.proccessUser = function () {
        var user = $scope.user;
        UserService.addUser(user)
            .then(function (response) {
                console.log(response);
            },
            function error(error) {
                console.log(error);
            }
            );
    };
});