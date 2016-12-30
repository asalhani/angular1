'use strict';

var eventsApp = angular.module("eventsApp");

eventsApp.controller('EventController', function EventController($scope) {
    $scope.sortOrder = 'name';
    $scope.snippet = '<span style="color:red">hi there</span>';
    $scope.event = {
        name: 'Angular Boot camp. Advanced',
        date: '11/12/2016',
        time: '11:30 am',
        location: {
            address: 'Google Headquarter',
            city: 'Montain View',
            province: 'CA'
        },
        imageUrl: 'img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass',
                creatorName: 'Bob Smith',
                duration: 1,
                level: 'Advanced',
                abstract: 'Learn in & outs of Directives',
                upVoteCount:0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'Jhon Doe',
                duration: 2,
                level: 'Introductory',
                abstract: 'Take close look at scopes',
                upVoteCount:0
            },
            {
                name: 'Well behaved controllers!!',
                creatorName: 'Jand Doe',
                duration: 4,
                level: 'Intermediate',
                abstract: 'How controllers works',
                upVoteCount:0
            }
        ]
    };

    // Up vote event
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }

    // down vote event
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }
});
