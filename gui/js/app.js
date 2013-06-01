'use strict';
// Declare app level module which depends on filters, and services
angular.module('imani.admin', ['imani.admin.filters', 'imani.admin.services', 'imani.admin.directives', 'imani.admin.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MyCtrl1'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
