/**
 * Controller for displayin 'Angular Proficiency'
 * Creation Date : 11 SEPT 16
 */

'use strict';

//Angular App Initialization
 var testAngularApp = angular.module('testAngularApp', []);
 testAngularApp.controller('MasterController', [ '$scope', 'TableDataService', MasterController ]);
 testAngularApp.controller('TableController', [ '$scope',  TableController ]);

 //Master Controller function definition
function MasterController($scope, TableDataService) {
	 $scope.items=[];
	 TableDataService.getTableData($scope).then(function(tableItems){
		 $scope.items=tableItems;
		});
 }

//Table Controller Function Definition
function TableController($scope){
	 var self = this;
	 self.tableData=[];
	 self.inputData = {
				price :  '',
				newFrom : '',
				usedFrom : '',
				otherFormats:''
			};
	 
	 self.buttonText="Add New Row";
	 
	 //Add New Row Function
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
		 $scope.tableData.push(self.modifiedInputData);
		 self.reset();
		}
		else{
			alert('Please enter required fields');
		}
	 }else{
		 
		 self.reset();
		 alert("Update functionality is not provided as per the exercise");
	 }
	 }
	
	 //Delete Row Function
	self.deleteRow= function(item){
		 var index = $scope.tableData.indexOf(item);
		 $scope.tableData.splice( index, 1 );
		 self.reset();
	 }
	 
	//Clearing the form function
	 self.reset = function(){
		 self.inputData = {
					price :  '',
					newFrom : '',
					usedFrom : '',
					otherFormats:''
				};
	 }
	 
	 //Edit row function with button text change functionality
	 self.editRow= function(item){
		
		 self.buttonText="Update Details";
	 }
	} 
