var app = angular.module('app', []);

app.controller('ParentCtrl',
	
	function ParentCtrl ($scope) {
	
	$scope.$broadcast('parent', 'Some data');
});

app.controller('SiblingOneCtrl',
	
	function SiblingOneCtrl ($scope) {

	$scope.$on('parent', function (event, data) {
		console.log(data);
	
	});
});