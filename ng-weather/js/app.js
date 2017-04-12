//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTE
weatherApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.htm',
			controller: 'homeController'
		})
		.when('/forecast', {
			templateUrl: 'pages/forecast.htm',
			controller: 'forecastController'
		})
		.when('/forecast/:days', {
			templateUrl: 'pages/forecast.htm',
			controller: 'forecastController'
		})
});

//SERVICES
weatherApp.service('cityService', function(){
	this.city = "Pune, MH";
});

//APP ID : e25f9893e2867d739fa710a41aedfcf6

//CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
	
	$scope.city = cityService.city;
	
	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
	
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
	$scope.city = cityService.city;
	
	$scope.days = $routeParams.days || '2';
	
	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
		{ callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } }
	);
	
	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, appid : 'e25f9893e2867d739fa710a41aedfcf6' })
	
	$scope.convertToFahrenheit = function(degK){
		return Math.round((1.8 * (degK - 273)) + 32);
	};
	
	$scope.convertToDate = function(dt){
		return new Date(dt * 1000); 
	};
	
}]);

