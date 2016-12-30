var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope', function($scope) {

  var person = {
      firstName : "scott",
      lastName : "Allen",
      imageSrc : "https://qsf.ec.quoracdn.net/-3-images.logo.wordmark_default.svg32753849bf197b54.svg"
  }
  $scope.message = 'Hola!';
  $scope.person = person;

}]);