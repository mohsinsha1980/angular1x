var proFormatsApp = angular.module('proFormatsApp', []);

proFormatsApp.controller('productFormatController', function($scope, $location, $http){
	$scope.showAddButton = true;
	$scope.errMsg = false;
/* Update */
	$scope.trows = [
		{ 	'name':'Hardcover',
			"price":'300.00',
			"newfrom":'334.99',
			"usedfrom":'269.99'
		},
		{ 	'name':'Paperback',
			"price":'300.00',
			"newfrom":'334.99',
			"usedfrom":'269.99'
		},
		{ 	'name':'Audio, CD, Audiobook, Unabridged',
			"price":'300.00',
			"newfrom":'334.99',
			"usedfrom":'269.99'
		},
		{ 	'name':'Unknown Binding',
			"price":'300.00',
			"newfrom":'334.99',
			"usedfrom":'269.99'
		}
	];
	// Add row
	$scope.addNamerow = function(){
		console.log("name="+$scope.nname+$scope.price+$scope.newfrom+$scope.usedfrom);
		$scope.showUpdate = false;
		if($scope.nname == undefined || $scope.price == undefined || $scope.newfrom == undefined || $scope.usedfrom == undefined)
		{
			console.log("blank");
			$scope.errMsg = true;
		}
		else
		{
			console.log("values");
			$scope.errMsg = false;
				$scope.trows.push({'name':$scope.nname,
			"price":$scope.price,
			"newfrom":$scope.newfrom,
			"usedfrom":$scope.usedfrom
			});
		}
		
	
    };
	// Remove row
	$scope.removeNamerow = function(name){
		$scope.errMsg = false;
		if ($scope.trows.length > 1) {
			var index = -1;		
			var comArr = eval( $scope.trows );
			for( var i = 0; i < comArr.length; i++ ) {
				if( comArr[i].name === name ) {
					index = i;
					break;
				}
			}
			if( index === -1 ) {
				console.log( "Something gone wrong" );
			}
			$scope.trows.splice( index, 1 );
		} else {
			console.log("Must have one Row");
		}
		
			
    };
	$scope.updateDetails = function()
	{
		$scope.showAddButton = false;
		$scope.showUpdate = true;
		$scope.errMsg = false;
	}

});