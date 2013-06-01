'use strict';
/* Controllers */
angular.module('imani.controllers', [])
    .controller("imani.controller", function($scope, $http, $location) {
        var url = location.search.substring(1);
        if (url !== null) {
            $http.get("jsonData/" + url)
                .success(function(data) {
                    console.log(data);
                    $scope.person = data;
                })
                .error(function(data) {
                    console.log(data);
                });
        }
        
    });