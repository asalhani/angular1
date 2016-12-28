var app = angular.module("app", []);

app.controller('PersonController', ['$scope', '$http', function ($scope, $http) {
    $scope.greeting = "hallow";
    var person = {
        firstName: 'adib',
        lastName: 'salhani',
        imageSrc: ""
    }
    $scope.person = person;

    var onUserComplete = function (response) {
        $scope.user = response.data;
    };

    var onError = function(reason){
        $scope.error = "error on calling HTTP !!!";
    }
    $http.get('https://api.github.com/users/robconery')
        .then(onUserComplete, onError);
}]);