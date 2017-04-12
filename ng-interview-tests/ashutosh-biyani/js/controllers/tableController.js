/**
 * Main Controller
 Controller contains method to add,delete,edit rows
 */
 
 var mainApp = angular.module('mainApp', []);
 mainApp.controller('mainController', [ '$scope', 'DisplayDataService', mainController ]);
 mainApp.controller('TableController', [ '$scope',  TableController ]);

		
 function mainController($scope, DisplayDataService) {
	 
	 $scope.items=[];
	 // Call to Display Data Service to get the json as data
	 DisplayDataService.getData($scope).then(function(arrItems){
		 $scope.items=arrItems;
		
		});
					 
 }
 

 function TableController($scope){
	 	 
	 var tableController = this;
	 tableController.tabledata=[];
	 tableController.inputData = {
				price :  '',
				newFrom : '',
				usedFrom : '',
				otherFormats:''
			};
	 
	 tableController.buttonText="Add New Row";
	 
	 // Check if any input is blank otherwise Add New Row
	 tableController.addNewRow = function(){
		 if(tableController.buttonText==="Add New Row"){
		if(tableController.inputData.price != '' && tableController.inputData.newFrom != '' 
			&& tableController.inputData.usedFrom != '' && tableController.inputData.otherFormats ){
		tableController.modifiedInputData = {
				
				price :  tableController.inputData.price,
				newFrom : tableController.inputData.newFrom,
				usedFrom : tableController.inputData.usedFrom,
				otherFormats: tableController.inputData.otherFormats
				
		}
		 $scope.tabledata.push(tableController.modifiedInputData);
		 tableController.reset(); // reset the input box values to blank
		}
		else
		{
			alert('Please provide value for input fields');
		}
		 }else{
			 tableController.reset();
			alert("Update functionality not part of exercise");
		 }
	 }
	 // Edit the text of the button row
	  tableController.editRow= function(){
		  
			 tableController.buttonText="Update Details"; // Change the button heading as Update details
	 }
	//Delete the  Row
	 tableController.deleteRow= function(item){
		 
				 alert("Delete functionality not part of exercise");
	 }	
	 	 
	 // Reset the vlaues of input box
	 tableController.reset = function(){
		 tableController.inputData = {
					price :  '',
					newFrom : '',
					usedFrom : '',
					otherFormats:''
				};
		 
	 }
	 
	
	 
	 
	 
 } 