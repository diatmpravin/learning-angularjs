'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('myCtl', function($scope){
	$scope.name = 'Hello Test';
	console.log($scope.name);
});