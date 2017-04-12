 var angularTestExcersie = angular.module('angularTestExcersie', []);
 angularTestExcersie.controller('TestExcersieController', [ '$scope', 'TableDataService', TestExcersieController ]);
 angularTestExcersie.controller('testTabController', [ '$scope',  testTabController ]);

		
 function TestExcersieController($scope, TableDataService) {
	 
	 $scope.items=[];
	 
	 TableDataService.getTableData($scope).then(function(arrItems){
		 console.log('items::' + JSON.stringify(arrItems));
		 $scope.items=arrItems;
		 console.log('items::' + JSON.stringify($scope.items));
			
		});
 
 }
 


 function testTabController($scope){
	 
	 
	 var self = this;
	 self.rowData=[];
	 self.inputData = {
				price :  '',
				newFrom : '',
				usedFrom : '',
				otherFormats:''
			};
	 
	 self.buttonText="Add New Row";
	 
	 self.addNewRow = function(){
		if(self.inputData.price != '' && self.inputData.newFrom != '' 
			&& self.inputData.usedFrom != '' && self.inputData.otherFormats ){
		self.modifiedInputData = {
				
				price :  'R ' + self.inputData.price,
				newFrom : 'R ' + self.inputData.newFrom,
				usedFrom : 'R ' + self.inputData.usedFrom,
				otherFormats: self.inputData.otherFormats
				
		}
		 $scope.rowData.push(self.modifiedInputData);
		 self.reset();
		}
		else
			alert('Please enter the required fields');
	 }
		
	 
	 self.deleteRow= function(item){
		 console.log('item:::' + JSON.stringify(item));
		
		 var index = $scope.rowData.indexOf(item);
		 $scope.rowData.splice( index, 1 );
		 self.reset();
	 }
	 
	 self.reset = function(){
		 self.inputData = {
					price :  '',
					newFrom : '',
					usedFrom : '',
					otherFormats:''
				};
		 
	 }
	 
	 self.editRow= function(item){
				 self.buttonText="Update Details";
	 }
	 
	 self.newData=function(str){
		 alert('call me' + str);
	 }
	 
 } 