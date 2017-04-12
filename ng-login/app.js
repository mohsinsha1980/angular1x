var myApp = angular.module('myApp', []);

myApp.controller('myLoginCtrl', ['$scope', function($scope){
	
	$scope.lgUsername="";
	$scope.lgPassword="";
	$scope.lgError="";
	$scope.login = function(){
		if($scope.lgUsername === ""){
			$scope.lgError += "Username missing.\n";
		}
		else if($scope.lgPassword === ""){
			$scope.lgError += "Password missing.\n";
		}
		else{
			//$scope.lgError = [];
		};
		alert($scope.lgError);
	};
}]);
 
myApp.directive('myLoginDirective', function () {
	return {
		templateUrl: 'login.html',
		
		restrict: 'E',
		
		replace: true,
		link: function (scope, element, attrs) {
			//element.find('btn btn-primary');
		}
	};
});