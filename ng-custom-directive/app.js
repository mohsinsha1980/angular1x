//App
var myApp = angular.module('myApp', []);

//Controller
myApp.controller('myCtrl', ["$scope", function($scope){
	$scope.directive = "This is a Controller!";
}]);

//Custom Directive
myApp.directive('customDirectiveOne', function(){
	return{
		restrict: 'E', //E=Element, A=Attribute, C=Class, M=Comment
		templateUrl: 'tmpl-directive-one.html',
		replace: true,
		link: function ($scope, element, attrs) {
			element.append(attrs.title);
			element.addClass('gray');
			element.bind('click', function () {
				element.append('....You clicked me!');
			});
			element.bind('mouseenter', function () {
				element.css('background-color', 'yellow');
			});
			element.bind('mouseleave', function () {
				element.removeAttr('style');
			});
		}
	}
});

myApp.directive('customDirectiveTwo', function(){
	return{
		restrict: 'A',//E=Element, A=Attribute, C=Class, M=Comment
		templateUrl: 'tmpl-directive-two.html',
		replace: true,
		link: function ($scope, element, attrs) {
			element.append('.....manipulated the isolated scope!');
			element.bind('click', function () {
				element.append('....You clicked me!');
			});
			element.bind('mouseenter', function () {
				element.css('background-color', 'yellow');
			});
			element.bind('mouseleave', function () {
				element.css('background-color', 'white');
			});
		}
	}
});

myApp.directive('customDirectiveThree', function(){
	return{
		restrict: 'C', //E=Element, A=Attribute, C=Class, M=Comment
		templateUrl: 'tmpl-directive-three.html',
		replace: true,
		link: function ($scope, element, attrs) {
			element.append('.....manipulated the isolated scope!');
			element.bind('click', function () {
				element.append('....You clicked me!');
			});
			element.bind('mouseenter', function () {
				element.css('background-color', 'yellow');
			});
			element.bind('mouseleave', function () {
				element.css('background-color', 'white');
			});
		}
	}
});

myApp.directive('customDirectiveFourth', function(){
	return{
		restrict: 'M', //E=Element, A=Attribute, C=Class, M=Comment
		templateUrl: 'tmpl-directive-fourth.html',
		replace: true,
		link: function ($scope, element, attrs) {
			element.append('.....manipulated the isolated scope!');
			element.bind('click', function () {
				element.append('....You clicked me!');
			});
			element.bind('mouseenter', function () {
				element.css('background-color', 'yellow');
			});
			element.bind('mouseleave', function () {
				element.css('background-color', 'white');
			});
		}
	}
});