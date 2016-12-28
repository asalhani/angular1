var app = angular.module("app");

app.controller('mainController', ['$scope',  '$interval','$location', function($scope, $interval, $location) {
   
    // PROPARTIES
    
    $scope.username = "angular";
    $scope.countdown = 5;
    $scope.repoSortOrder = '-stargazers_count';


    // EVENT
   
    var decrementCountdown = function() {
        $scope.countdown--;
        if ($scope.countdown < 1) {
            $scope.search($scope.username);
        }
    }

    var countdownInterval = null;
    var startCoundown = function() {
        countdownInterval =  $interval(decrementCountdown, '1000', $scope.countdown);
    }

    // FUNCTIONS
    $scope.search = function(username) {
        if(countdownInterval)
        {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
        $location.path('/user/' + username);
    }

    $scope.clearSearch = function() {
        $scope.countdown = 5;
        startCoundown();
        $scope.username = '';
        $scope.repos = [];
        $scope.user = '';
    }

    // INIT
    $scope.init = function() {
        startCoundown();
    }

    // run init function
 //   $scope.init();

}]);