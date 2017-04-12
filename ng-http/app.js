var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {
	$http.get('data.json', [])
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
});