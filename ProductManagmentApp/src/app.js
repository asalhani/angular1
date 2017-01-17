var app = angular.module('guessNumberApp', []);

app.controller('mainCtrl', function ($scope) {
    $scope.verifyGuess = function () {
        $scope.deviation = $scope.original - $scope.guess;
        if ($scope.deviation == 0) {
            $scope.result = 'Correct !!';
            $scope.disable = true;
        }
        else {
            $scope.numberOfTries++;
            $scope.result = 'worng !!';
        }

        if ($scope.numberOfTries >= 5) {
            $scope.result = 'You didn\'t gussed the number.!!';
            $scope.disable = true;
        }
    };

    $scope.reset = function(){
        $scope.init();
    };

    $scope.init = function () {
        $scope.deviation = null;
        $scope.disable = false;
        $scope.original = Math.floor((Math.random() * 1000) + 1);
        $scope.numberOfTries = 0;
        $scope.guess = null;
        $scope.result = null;
    };

    $scope.init();
});