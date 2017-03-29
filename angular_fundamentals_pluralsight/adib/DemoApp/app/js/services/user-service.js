'use strict';
// https://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service

var app = angular.module('SubmitFormApp');

app.factory('UserService', ['$http', function ($http) {
    var urlBase = 'http://localhost/webapi/api/user/';
    var dataFactory = {};

    dataFactory.getUser = function(id){
        return $http.get(urlBase + id);
    };

    dataFactory.addUser = function(user){
        return $http.post(urlBase, user);
    }

    return dataFactory;
}]);

