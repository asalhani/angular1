(function () {

    var app = angular.module("myApp");
    app.controller("AboutController", function ($scope) {
        $scope.message = "About CTRL";
    });
})();