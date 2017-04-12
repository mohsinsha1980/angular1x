var app = angular.module('plunker', []);

app.controller('MainCtrl', ["$scope", "myhttpserv", function($scope, myhttpserv){
	myhttpserv
		.then(function(response) {
			$scope.responseData = true;
			$scope.names = response.data;
			$scope.firstname = $scope.names.firstname;
			$scope.lastname = $scope.names.lastname;
			$('.loader').hide();
		}, function msgError(response) {
			$scope.responseData = false;
			$scope.firstname = "Something is wrong!";
			$('.loader').hide();
	});
}]);

app.controller('MainCtrl2', ["$scope", "myhttpserv", function($scope, myhttpserv){
	myhttpserv
		.then(function(response) {
			$scope.responseData = true;
			$scope.names = response.data;
			$scope.firstname = $scope.names.firstname;
			$scope.lastname = $scope.names.lastname;
			$('.loader').hide();
		}, function msgError(response) {
			$scope.responseData = false;
			$scope.firstname = "Something is wrong!";
			$('.loader').hide();
	});
}]);

app.service('myhttpserv', function ($http){
	return $http.get('http://localhost/ng-http-service/data.json', []);
});