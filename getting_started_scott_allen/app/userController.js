var app = angular.module("app");

app.controller('userController', ['$scope', 'github', '$routeParams', function ($scope, github, $routeParams) {

   

    // EVENT
    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user)
            .then(onRepos, onError);
    };

    var onRepos = function (data) {
        $scope.repos = data;
    }

    var onError = function (reason) {
        $scope.error = "Could not fetch the data!!";
    }

    // INIT
    $scope.init = function () {
        startCoundown();
    }

     // PROPARTIES
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = '-stargazers_count';
    github.getUser($scope.username).then(onUserComplete, onError);

    // run init function
    //   $scope.init();

}]);