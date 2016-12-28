var app = angular.module("app", []);

app.controller('PersonController', ['$scope', '$http', function($scope, $http) {
    $scope.greeting = "Github Viwer App!!";
    var person = {
        firstName: 'adib',
        lastName: 'salhani',
        imageSrc: ""
    }

    // PROPARTIES
    $scope.person = person;
    $scope.username = "angular";
    $scope.repoSortOrder = '-stargazers_count';

    // EVENT
    var onUserComplete = function(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
            .then(onRepos, onError);
    };

    var onError = function(reason) {
        $scope.error = "Could not fetch the data!!";
    }

    // FUNCTIONS
    $scope.search = function(username) {
        $http.get('https://api.github.com/users/' + username)
            .then(onUserComplete, onError);
    }

    var onRepos = function(response) {
        $scope.repos = response.data;
    }

    // INIT
    $scope.init = function() {
        if ($scope.username.length > 0)
            $scope.search($scope.username);
    }

    $scope.init();

}]);