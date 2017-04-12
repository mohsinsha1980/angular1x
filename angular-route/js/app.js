var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'pages/home.html',
      controller: 'myCtrl',
    })
	.when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'myCtrl',
    })
	.when('/about/about-1', {
      templateUrl: 'pages/about-1.html',
      controller: 'myCtrl',
    })
    .otherwise('/home');
});

app.controller("myCtrl", ["$scope", function($scope){
	$scope.people = [{
		name: 'John',
		address: '123 East St',
		city: 'Pune',
		zip: '411002'
	},
	{
		name: 'William',
		address: '123 East St',
		city: 'Pune',
		zip: '411002'
	},
	{
		name: 'Tony',
		address: '123 East St',
		city: 'Pune',
		zip: '411001'
	}];
	
	$scope.formattedAddress = function(person){
		return person.address +', '+ person.city +', '+ person.zip;
	};
}]);

app.directive('searchResults', function(){
	return{
		restrict: "EACM",
		templateUrl: "pages/search-result.html",
		replace: true,
		scope: {
			personObject: "=",
			formattedAddressFunction: "&"
		},
		transclude: true
	}
});
