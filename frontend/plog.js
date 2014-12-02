'use strict';

var app = angular.module('plog');

app.controller('postedDataController', function ($scope){

    //var socket = io.connect('http://localhost:8090');
    var socket = io.connect('http://p-log.herokuapp.com');
    
    $scope.received = [];
    $scope.connected = 'waiting for connection';

    socket.on('posted', function (data) {
        $scope.received.push({body:data['body'], query:data['query'], params:data['params']});
        $scope.$apply();
    });

    socket.on('connected', function (data) {
        $scope.connected = data['connected'];
        $scope.$apply();
    });
  });