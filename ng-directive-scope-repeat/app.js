//App
var myApp = angular.module('myApp', []);

//Controller
myApp.controller('myCtrl', ["$scope", function($scope){
	$scope.people = [{
		name: "John White",
		address: "123 East St",
		city: "Pune",
		zip: "411001"
	},
	{
		name: "Tony William",
		address: "123 East St",
		city: "Pune",
		zip: "411001"
	}];
}]);

//Custom Directive
myApp.directive('customDirective', function(){
	return{
		restrict: 'EACM', //Element, Attribute, Class, Comment
		templateUrl: 'tmpl-directive.html',
		replace: true,
		scope:{ //isolated scope
			personName: "@",
			personObject: '='
		}
	}
});
