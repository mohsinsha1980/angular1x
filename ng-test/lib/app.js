var app = angular.module('myApp', []);

app.controller('mainCtrl', ['$scope', function($scope){
	$scope.people = [
		{firstName: 'Nitin', lastName: 'Jadhav', age: 31},
		{firstName: 'Sachin', lastName: 'Chaudhary', age: 20},
		{firstName: 'Manoj', lastName: 'Parihar', age: 26}
	];
	$scope.editFun = false;
	$scope.addFun = true;
	$scope.btnText = "Add";
	$scope.indexNo = "";
	
	$scope.edit = function(index){
		$scope.editFun = true;
		$scope.addFun = false;
		$scope.btnText = "Edit";
		$scope.fname = $scope.people[index].firstName;
		$scope.lname = $scope.people[index].lastName;
		$scope.age = $scope.people[index].age;
		$scope.indexNo = index;
	};
	$scope.delete = function(index){
		$scope.people.splice(index, 1);
	};
	
	$scope.frmButton = function(index){
		if($scope.editFun == true && $scope.addFun == false){
			$scope.people[index].firstName =  $scope.fname;
			$scope.people[index].lastName = $scope.lname;
			$scope.people[index].age = $scope.age;
			$scope.fname = "";
			$scope.lname = "";
			$scope.age = "";
			$scope.btnText = "Add"
			$scope.editFun = false;
			$scope.addFun = true;
		}
		else if( $scope.editFun == false && $scope.addFun == true ){
			if($scope.fname == "" && $scope.lname == "" && $scope.age == ""){
				alert('Please fill all the fields!');
			}
			else{
				$scope.people.push({firstName: $scope.fname, lastName: $scope.lname, age: $scope.age});
				$scope.fname = "";
				$scope.lname = "";
				$scope.age = "";
			}
		}
		else{
			return false;
		}
	};
	
}]);