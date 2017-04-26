(function () {
	'use strict';
	var myApp = angular.module('myApp', []);
	
	myApp.controller('parentController', parentController);
	myApp.controller('childController', childController);
	
	function parentController($scope){
		$scope.parentContent = "Parent Controller's Content here.";
		$scope.parentOnClick = function (evt) {
			$scope.$broadcast("SendDown", $scope.parentContent);
		}
		
		$scope.$on("SendUp", function (evt, data) {
			$scope.childContentData = data;
		});
	};
	
	function childController($scope){
		$scope.childContent = "Child Controller's content here."
		
		$scope.$on("SendDown", function (evt, data) {
			$scope.parentContentData = data;
		});
		
		$scope.childOnClick = function (evt) {
			$scope.$emit("SendUp", $scope.childContent);
		}
	};

}());