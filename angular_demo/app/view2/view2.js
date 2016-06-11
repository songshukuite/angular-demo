'use strict';

angular.module('myApp.view2', ['ngRoute','ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
  $scope.$parent.view = "view2";
}]);