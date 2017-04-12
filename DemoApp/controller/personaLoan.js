demoApp.controller('personalLoanCtrl',function($scope,commonServiceApi){
	$scope.popup1 = {
		opened: false
	 };
	 $scope.customerList = [];
	 $scope.selected = { index : null };
	$scope.getStates = function(){
		$scope.stateList = commonServiceApi.getStateList();
	};
	$scope.$watch('selected.index', function () {
				console.log($rootScope.isLoanSection.hidden);
			  });
	 $scope.open1 = function() {
		$scope.popup1.opened = true;
	 };
	$scope.customerDefault = function(){
		return { fullName : '' , MobileNumber : '', State : '', Occupation : '', Date : '',Monthly : ''};
	};
	
	$scope.getStates();
	$scope.saveCustomerDetails = function(){
		if($scope.selected.index == null){
			$scope.customerList.push($scope.customer);
		}
		else{
			$scope.customerList[$scope.selected.index]  = $scope.customer;
		}
		$scope.selected.index = null;
		$scope.customer = $scope.customerDefault();
	};
	$scope.editCustomerDetails = function(index){
		$scope.selected.index = index;
		$scope.customer = angular.copy($scope.customerList[index]);
	};
	$scope.deleteCustomerDetails = function(index){
		$scope.customer = $scope.customerList.splice(index,1);
	};
	$scope.customer = $scope.customerDefault();
});