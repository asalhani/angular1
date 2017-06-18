(function () {

    var app = angular.module("myApp");
    app.controller("HomeController", function ($scope) {
        $scope.message = "Home CTRL";
    });
})();