var demoApp = angular.module("demoApp", ['ngRoute','ui.bootstrap','modal.demo']);
demoApp.config(function($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'view/home.html',controller: 'homeController'})
		.when('/home', { templateUrl: 'view/home.html',controller: 'homeController'})
		.when('/contactus', { templateUrl: 'view/contactus.html',controller: 'contactusController'})
		.when('/loan', { templateUrl: 'view/loan.html',controller: 'demoAppController'})
		.when('/creditCardLoan', { templateUrl: 'view/loan.html',controller: 'demoAppController'})
		.when('/internetBanking', { templateUrl: 'view/banking.html',controller: 'demoAppController'})
		.when('/mobileBanking', { templateUrl: 'view/banking.html',controller: 'demoAppController'})
		.otherwise({ redirectTo: '/' });
});
demoApp.controller('demoAppController', function($scope,$rootScope) {
	$scope.status = {
		  isopen1: false,
		  isopen2: false
		 };
	if($rootScope.isLoanSection == undefined){$rootScope.isLoanSection = { hidden : true };}
	if($rootScope.isBanking == undefined){$rootScope.isBanking = { hidden : true };}
	$scope.showLoanSection = function(event,section){
	$rootScope.isLoanSection = { hidden : true };
		if(section == 'PL'){
			$rootScope.isLoanSection.hidden = false;
		}else if(section == 'CEL'){
			$rootScope.isLoanSection.hidden = true;
		}
	};
	$scope.showBankingSection = function(event,section){
	
	$rootScope.isBanking = { hidden : true };
		if(section == 'IN'){
			$rootScope.isBanking.hidden = false;
		}else if(section == 'MO'){
			$rootScope.isBanking.hidden = true;
		}
	};
});
demoApp.directive('personalLoanForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'view/personalLoan.html',
    controller: function ($scope,$rootScope) {
             $scope.$watch($rootScope.isLoanSection.hidden, function () {
				console.log($rootScope.isLoanSection.hidden);
			  });
        }
  };
});
demoApp.directive('creditCardLoan', function() {
  return {
    restrict: 'E',
    templateUrl: 'view/creditCardLoan.html',
    controller: function ($scope,$rootScope) {
			  $scope.$watch($rootScope.isLoanSection.hidden, function () {
				console.log($rootScope.isLoanSection.hidden);
			  });
        }
  };
});

demoApp.directive('internetBanking', function() {
  return {
    restrict: 'C',
    templateUrl: 'view/internetBanking.html',
    controller: function ($scope,$rootScope) {
             $scope.$watch($rootScope.isBanking.hidden, function () {
				console.log($rootScope.isBanking.hidden);
			  });
        }
  };
});
demoApp.directive('mobileBanking', function() {
  return {
    restrict: 'C',
    templateUrl: 'view/mobileBanking.html',
    controller: function ($scope,$rootScope) {
			  $scope.$watch($rootScope.isBanking.hidden, function () {
				console.log($rootScope.isBanking.hidden);
			  });
        }
  };
});