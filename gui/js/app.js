'use strict';
// Declare app level module which depends on filters, and services
angular.module('imani', ['imani.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: 'index.html'});
  }]);
