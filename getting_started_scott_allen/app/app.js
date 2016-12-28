var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: '/app/main.html',
            controller: 'mainController'
        })
        .when("/user/:username",{
            templateUrl: '/app/user.html',
            controller: 'userController'
        })
        .otherwise({ redirectTo: "/main" })
});