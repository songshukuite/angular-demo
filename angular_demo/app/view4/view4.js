'use strict';

angular.module('myApp.view4', ['ngRoute','ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', function($scope) {
  $scope.$parent.view = "view4";
}]);