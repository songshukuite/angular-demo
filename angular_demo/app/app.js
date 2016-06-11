'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.version',
  'ngTouch',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/view/:pageId',{
    controller: function(params){
      return 'View' + params.pageId + 'Ctrl';
    },
    templateUrl:function(params){
      return 'view' + params.pageId + '/view' + params.pageId + '.html';
    }
  }).otherwise({redirectTo: '/view/1'});
}]).
controller('MainCtrl', ['$scope','$routeParams', '$location', function($scope, $routeParams, $location){
  $scope.pageId = $routeParams.pageId || 1;
  $scope.leftBarBool = false;
  $scope.rightBarBool = false;
  $scope.leftEle = document.getElementById("left-sidebar");
  $scope.rightEle = document.getElementById("right-sidebar");
  
  $scope.onSwipeLeft = function(){
    $scope.pageId = (++$scope.pageId % 5) || 1;
    console.log($scope.pageId);
    $location.path('/view/' + $scope.pageId);
    $scope.view = 'view' + $scope.pageId;
  };

  $scope.onSwipeRight = function(){
    $scope.pageId = (--$scope.pageId % 5) || 4;
    console.log($scope.pageId);
    $location.path('/view/' + $scope.pageId);
    $scope.view = 'view' + $scope.pageId;
  };
  
  $scope.leftSidebarShow = function($event){
    $event.stopPropagation();
    if($scope.leftBarBool){
      angular.element($scope.leftEle).removeClass("left-sidebar");
      $scope.leftBarBool = false; 
    }else{
      $scope.rightBarBool = false;
      $scope.leftBarBool = true;
      angular.element($scope.leftEle).addClass("left-sidebar");
    }
  };
  
  $scope.rightSidebarShow = function($event){
    $event.stopPropagation();
    if($scope.rightBarBool){
      angular.element($scope.rightEle).removeClass("right-sidebar");
      $scope.rightBarBool = false; 
    }else{
      $scope.leftBarBool = false;
      $scope.rightBarBool = true;
      angular.element($scope.rightEle).addClass("right-sidebar");
    }
  };
  
  $scope.sidebarHide = function($event){
    if($scope.leftBarBool){
      angular.element($scope.leftEle).removeClass("left-sidebar");
      $scope.leftBarBool = false; 
    }
    if($scope.rightBarBool){
      angular.element($scope.rightEle).removeClass("right-sidebar");
      $scope.rightBarBool = false; 
    }
  }
}]);