(function(){
   var app =  angular.module("myApp", ['ngRoute']);
    app.config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(false).hashPrefix('');

        $routeProvider
           .when('/', {
               templateUrl: "app/pages/home.html",
               controller: 'HomeController'
           })
           .when('/blog', {
               templateUrl: "app/pages/blog.html",
               controller: 'BlogController'
           })
           .when('/about', {
               templateUrl: "app/pages/about.html",
               controller: 'AboutController'
           })
           .otherwise({redirectTo:'/'});
    });
    
})();