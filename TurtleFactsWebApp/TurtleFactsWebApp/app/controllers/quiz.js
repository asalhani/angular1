(function () {
    var module = angular.module("turtleFacts");

    module.controller('quizCtrl', function (quizMetrics, dataService) {
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.dataService = dataService;
        vm.activeQuestion = 0;
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;

        var numQuestionsAnswered = 0;

        /*
         * setActiveQuestion takes one optional argument.
         *
         * If no argument is passed it will set the active question in the quiz
         * to the next question that has yet to be answered. This allows the
         * user to skip questions and come back to them later, even by clicking
         * the "continue" button. It will still take them to the unanswered
         * question.
         *
         * If an argument is passed into the function then it will simply set
         * the activeQuestion to the number that was passed in as an argument
         */
        function setActiveQuestion() {
            var breakOut = false;
            var quizLength = dataService.quizQuestions.length - 1;

            while(!breakOut){
                vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;

                if(dataService.quizQuestions[vm.activeQuestion].selected === null){
                    breakOut = true;
                }
            }
        }

        /*
         * This method will be triggered everytime the user clicks continue in
         * the quiz.
         *
         * It will then check if the current question has been answered, if it
         * has it will increment the local numQuestionsAnswered variable. Then
         * it checks if the numQuestionsAnswered is equal to the total number
         * of questions in the quiz, meaning the user has complected the quiz.
         *
         * If the quiz has been completed then it sets the finalise flag to
         * true, which removes the quiz from the view and displays a prompt to
         * ensure the user is finished. Then returns from the function
         *
         * If all the questions have not been answered or the current question
         * has not been selected the setActiveQuestion method is called to
         * increment the active question to the next unanswered question. If
         * the current question is the only unanswered question then it will
         * remain on that question
         */
        function questionAnswered() {
            var quizLength = dataService.quizQuestions.length;

            if (dataService.quizQuestions[vm.activeQuestion].selected !== null) {
                numQuestionsAnswered++;
            }

            if (numQuestionsAnswered >= quizLength) {
                //Finalise the quiz
            }

            vm.setActiveQuestion();
        }
    });
})();
