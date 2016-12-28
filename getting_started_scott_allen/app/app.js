var app = angular.module("app", []);

app.controller('PersonController', ['$scope', 'github', '$interval', '$log', '$anchorScroll', '$location', function($scope, github, $interval, $log, $anchorScroll, $location) {
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
    $scope.countdown = 5;


    // EVENT
    var onUserComplete = function(data) {
        $scope.user = data;
        github.getRepos($scope.user)
            .then(onRepos, onError);
    };

    var onError = function(reason) {
        $scope.error = "Could not fetch the data!!";
    }

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
        $log.info("Searcing for " + username);
        github.getUser(username)
            .then(onUserComplete, onError);
        if(countdownInterval)
            $interval.cancel(countdownInterval);
    }

    $scope.clearSearch = function() {
        $scope.countdown = 5;
        startCoundown();
        $scope.username = '';
        $scope.repos = [];
        $scope.user = '';
    }

    var onRepos = function(data) {
        $scope.repos = data;
        $location.hash('userDetails');
        $anchorScroll();
    }

    // INIT
    $scope.init = function() {
        startCoundown();
    }

    // run init function
 //   $scope.init();

}]);