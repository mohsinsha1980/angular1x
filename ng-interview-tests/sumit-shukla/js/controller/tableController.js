/**
 *  Controller for Implemnting Add Row and Custom Directive
 *	Created By : 45075 
 *  Created On : 10 SEP 16
 *
 *
 */
 
 var angularApp = angular.module('angularApp', []);
 angularApp.controller('AngularController', [ '$scope', 'TableService', AngularController ]);
 angularApp.controller('MainController', [ '$scope',  MainController ]);

  /*
   * Function for fetching table data
   *   
 */
		
 function AngularController($scope, TableService) {
	 
	 //var self =this;
	 $scope.items=[];
	 
	 TableService.getTableData($scope).then(function(arrItems){
		 console.log('items::' + JSON.stringify(arrItems));
		 $scope.items=arrItems;
		 console.log('items::' + JSON.stringify($scope.items));
			//$scope.$apply();
		});
 }
 
 /*
   * Function for displaying table data
   *   
 */

 function MainController($scope){
	 var self = this;
	 self.tableList=[];
	 self.inputData = {
				price :  '',
				newFrom : '',
				usedFrom : '',
				otherFormats:''
			};
	 
	 self.buttonText="Add New Row";
	 
	 self.addNewRow = function(){
	if(self.buttonText==="Add New Row"){
		if(self.inputData.price != '' && self.inputData.newFrom != '' 
			&& self.inputData.usedFrom != '' && self.inputData.otherFormats ){
		self.modifiedInputData = {
				
				price :  'R ' + self.inputData.price,
				newFrom : 'R ' + self.inputData.newFrom,
				usedFrom : 'R ' + self.inputData.usedFrom,
				otherFormats: self.inputData.otherFormats
				
		}
		 $scope.tableList.push(self.modifiedInputData);
		 self.reset();
		}
		else{
			alert('Please enter required details!!');
		}
	 }
	 
	 else{
		 self.reset();
		 alert("Update Functionality not Added!!");
	 }
		
	 }
	 
	 self.deleteRow= function(item){
		 console.log('item:::' + JSON.stringify(item));
		
		 var index = $scope.tableList.indexOf(item);
		 $scope.tableList.splice( index, 1 );
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
		// console.log('item:::' + JSON.stringify(item));
		 
		 self.buttonText="Update Details";
	 }
	 
	 
	 
 } 