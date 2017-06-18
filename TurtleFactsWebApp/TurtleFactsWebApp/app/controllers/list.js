(function () {
    var module = angular.module("turtleFacts");
    //module.controller('listCtrl', ['$scope', function ($scope) {
    //    $scope.text = "this is ctrl text";
    //}]);

    // module.controller("listCtrl", ['$scope', ListController]);
    // ListController.$inject = ['quizMetrics'];

    module.controller('listCtrl', function (quizMetrics,dataService ) {
        var vm = this;
        vm.data = dataService.turtlesData;
        vm.activeTurtle = {};
        vm.quizMetrics = quizMetrics;

        vm.text = "this is ctrl text";

        vm.searchKeyword = "";

        vm.changeActiveTurtle = function (index) {
            vm.activeTurtle = index;
        };

        vm.activateQuiz = function () {
            quizMetrics.changeState(true);
        };
    });
})();