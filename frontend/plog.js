'use strict';

var plog = angular.module('plog',['ngRoute']);

plog.controller('postedDataController', function ($scope){

    //var socket = io.connect('http://localhost:8090');
    var socket = io.connect('https://p-log.herokuapp.com');
    
    $scope.received = [];
    $scope.connected = 'waiting';

    socket.on('posted', function (data) {
        $scope.received.push({body:data['body'], query:data['query'], params:data['params']});
        $scope.$apply();
    });

    socket.on('connected', function (data) {
        $scope.connected = 'connected';
        $scope.$apply();
    });
  });