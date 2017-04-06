var app = angular.module("computerApp", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider.when("/main", {
        templateUrl: "main.html",
        controller: "MainCtrl"
    })
        .when("/contact", {
            templateUrl: "contact.html",
            controller: "ContactCtrl"
        })
        .when("/about", {
            templateUrl: "about.html",
            controller: "AboutCtrl"
        })
        .when("/services", {
            templateUrl: "services.html",
            controller: "ServicesCtrl"
        })
        .otherwise({redirectTo: '/main'})
}]);

app.controller("MainCtrl", ['$scope', function ($scope) {
    console.log("this is main ctrl");
}]);

app.controller("ContactCtrl", ['$scope', function ($scope) {
    console.log("this is Contact ctrl");
}]);

app.controller("AboutCtrl", ['$scope', function ($scope) {
    console.log("this is About ctrl");
}]);

app.controller("ServicesCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.services = {};

    $http.get('services.json').then(function(response){
        $scope.services = response.data;
        console.log($scope.services );
    });
}]);