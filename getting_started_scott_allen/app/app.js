var app = angular.module("app", []);

app.controller('PersonController', ['$scope', '$http', '$interval', '$log', '$anchorScroll', '$location', function($scope, $http, $interval, $log, $anchorScroll, $location) {
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
    var onUserComplete = function(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
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
        $http.get('https://api.github.com/users/' + username)
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

    var onRepos = function(response) {
        $scope.repos = response.data;
        $location.hash('userDetails');
        $anchorScroll();
    }

    // INIT
    $scope.init = function() {
        startCoundown();
    }

    // run init function
    $scope.init();

}]);