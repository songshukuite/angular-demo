'use strict';

angular.module('myApp.view1', ['ngRoute','ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
  $scope.$parent.view = "view1";
}]);