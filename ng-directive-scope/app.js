var app = angular.module("app", []);

app.controller("MainCtrl", function( $scope ){
	$scope.name = "Harry";
	$scope.surname = "Johnson"
	$scope.color = "#333333";
	$scope.reverseName = function(){
		$scope.name = $scope.name.split("").reverse().join("");
	};
	$scope.reverseSurname = function(){
		$scope.surname = $scope.surname.split("").reverse().join("");
	}
	$scope.randomColor = function(){
		$scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
	};
});

app.directive("myDirective", function(){
	return {
		restrict: "EA",
		scope: {
			name: "@parentName", //One way binding with Parent Scope.
			color: "=", //Two way binding with Parent Scope.
			reverse: "&" //Calling function from Parent scope.
		},
		template: [
			"<div class='line'>",
			"Name : <strong>{{name}} {{surname}}</strong>;  Change name:<input type='text' ng-model='name' /><br/>",
			"</div><div class='line'>",
			"Color : <strong style='color:{{color}}'>{{color|uppercase}}</strong>; Change color:<input type='text' ng-model='color' /><br/></div>",
			"<br/><input type='button' ng-click='reverse()' value='Reverse Name'/>"
			].join("")
	};
});