var myApp = angular.module('myApp', []);

myApp.controller("myCtrl", ["$scope", function($scope){
	//$scope.name="Mohsin";
	$scope.clickBtn = function(){
		$scope.name="Mohsin";
	};
}]);