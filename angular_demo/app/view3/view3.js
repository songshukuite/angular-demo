'use strict';

angular.module('myApp.view3', ['ngRoute','ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope',function($scope) {
  $scope.$parent.view = "view3";
}]);