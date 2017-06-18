(function () {

    var app = angular.module("myApp");
    app.controller("BlogController", function ($scope) {
        $scope.message = "Blog CTRL";
    });
})();