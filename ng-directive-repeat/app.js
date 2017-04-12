//App
var myApp = angular.module('myApp', []);

//Controller
myApp.controller('myCtrl', ["$scope", function($scope){
	$scope.people = [{
		name: "John",
		address: "123, East St",
		city: "Pune"
	},
	{
		name: "Tony",
		address: "123, East St",
		city: "Pune"
	}];
}]);

//Custom Directive
myApp.directive('customDirective', function(){
	return{
		restrict: 'EACM', //Element, Attribute, Class, Comment
		templateUrl: 'tmpl-directive.html',
		replace: true
	}
});
