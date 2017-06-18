(function () {
    var module = angular.module("turtleFacts");
    module.factory('quizMetrics', QuizMetrics);
    function QuizMetrics() {
        var quizObj = {
            quizActive: false,
            changeState: changeState
        };
        return quizObj;
    }
    
    function changeState(state) {
        this.quizActive = state;
    }
})();