var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, myService) {
	$scope.defaultDetails = function(){
		return { firstname : '',lastname : '',Age : '',qualification : []};
	}
	$scope.loadDefault = function(){
		$scope.personDetails = $scope.defaultDetails();
		$scope.loadJsonData();
		$scope.selected = { index : null , btText : 'Add'};
	};
	$scope.bindData = function(response){
		$scope.responseData = true;
		$scope.names = response.data;
		$('.loader').hide();
	};
	$scope.showError = function(){
		$scope.responseData = false;
		$scope.firstname = "Something is wrong!";
		$('.loader').hide();
	};
	$scope.loadJsonData = function(){
		myService.loadData()
		.then(
			function(response){
				$scope.bindData(response)
			},
			function msgError(response){
				$scope.showError();
			}
		);
	};
	$scope.clearData = function(){
		$scope.selected.index = null;
		$scope.selected.btText = 'Add';
		$scope.personDetails = $scope.defaultDetails();
	};
	$scope.addData = function(){
		if($scope.selected.index != null){
	       $scope.names[$scope.selected.index] = $scope.personDetails;	
		}
		else{
			$scope.names.push($scope.personDetails);
		}
		$scope.selected.index = null;
		$scope.selected.btText = 'Add';
		$scope.personDetails = $scope.defaultDetails();
	};
	$scope.editData = function(index){
		$scope.selected.index = index;
		$scope.selected.btText = 'Edit';
		$scope.personDetails = angular.copy($scope.names[index]);
	};
	
	$scope.loadDefault();
});
app.service("myService",function($http){
	var serObj = {};
	serObj.loadData = function(){
		return $http.get('http://localhost/sampleApp/data.json', [])
	}
	return serObj;
});



