(function() {
  'use strict';
  angular.module('Uiassg', []);
  
 angular
    .module('Uiassg')
    .service('UIService', uiService)
    .controller('UIController', uiController);
 
 angular
    .module('Uiassg')
    .directive('product', function(UIService) {
        var directive = {};
        directive.restrict = 'A'; /* restrict this directive to attributes */
       directive.templateUrl='./template/Items.html';
       directive.link = function($scope, element, attributes) {
               UIService.getProducts()
        .then(function(products) { 
          console.log(JSON.stringify(products));
          $scope.products=products;
          console.log('product set');
         }); 
        }
	   return directive;
       
    });
  function uiService($http, $q) {
 
    var products = undefined;
    this.getProducts = function() {
 
      if (!products) {

        var deferred = $q.defer();
 
        $http.get('./json/items.json')
          .then(function(result) {
            products = result.data;
            deferred.resolve(products);
          }, function(error) {
            products = error;
            deferred.reject(error);
          });
 
          products = deferred.promise;
      }
 
           return $q.when(products);
    };
 
  }
 
  function uiController($scope, UIService) {
     $scope.products={};
     $scope.newproduct={"name":"","price":0.0,"new":0.0,"used":0.0,"id":0,"productId":0};
     $scope.editFlag-false;
 	
      $scope.addProduct=function(button){
           if($scope.newproduct.name==''
			||$scope.newproduct.price==0
                ||$scope.newproduct.new==0
                ||$scope.newproduct.used==0){
			alert('Please enter product details.');
                return;
		}
           if($scope.editFlag==true){
			$scope.editFlag=false;
                 document.getElementById('addEditBtn').value="Add New Row";
                 for(var i=0;i<$scope.products.length;i++){
				if($scope.products[i].productId==$scope.newproduct.productId){
					$scope.products[i]=$scope.newproduct;
                           $scope.newproduct={"name":"","price":0.0,"new":0.0,"used":0.0,"id":0,"productId":0};
                           break;
				}
			 }
           }else{
           	var id=$scope.products.length+1;
			var newprod={"productId":id,"id":id,"name":$scope.newproduct.name, "price":$scope.newproduct.price, "new":$scope.newproduct.new, "used":$scope.newproduct.used};
           	$scope.products[$scope.products.length]=newprod;
                $scope.newproduct={"name":"","price":0.0,"new":0.0,"used":0.0,"id":0,"productId":0};
           }
	 };

      $scope.editProduct=function(prodid){
		console.log("PRODID="+prodid);
           $scope.editFlag=true;
           document.getElementById('addEditBtn').value="Update Details";
           for(var i=0;i<$scope.products.length;i++){
			if($scope.products[i].productId==prodid){
			   $scope.newproduct={"productId":prodid,"id":prodid,"name":$scope.products[i].name,"price":$scope.products[i].price,"new":$scope.products[i].new,"used":$scope.products[i].used};
			  break;
			}
		 }
	};

    
  }

 
})();