demoApp.controller('contactusController',function($scope,commonServiceApi){
	$scope.state = { code : "" };
	$scope.address = [];
	$scope.getStates = function(){
		$scope.stateList = commonServiceApi.getStateList();
	};
	
	$scope.add1 = [ { state :  'MAHARASHTRA' 
		, city : [ 
			{ name : 'Pune' , ATM : [ 
						{ Location : 'Shop No. 17, Building No. G, Sacred Heart Town, Co-Operative Housing Society Limited, S.No. 75/2, Wanawadi, Pune - 411 040.' },
						{ Location : 'Shop No. 3, Upper Ground Floor, Gera Legend, North Main Road, Koregaon Park, Pune - 411 001.' },
						{ Location : 'Shop No. 6, MIDC Shopping Complex, Hinjewadi, Pune - 411 027.' }
						] } ,
			{ name : 'Mumbai' , ATM : [ 
						{ Location : 'P&G India Ltd., Cardinal Gracious Road, Chakala, Andheri (E), Mumbai - 400 099.' } ,
						{ Location : 'Sunder Apartments, Opposite to Diamond Garden, Sion Trombay Road, Chembur, Mumbai - 400 071.' },
						{ Location : 'Parag Apartments, 27, Peddar Road, Mumbai - 400 026.' },
						{ Location : 'Ammu Bungalow, B/1, V Mehta Road, JVPD Scheme, Juhu, Mumbai - 400 049.' }
						] } 
			] }];
	$scope.add2 = [ { state :  'KARNATAKA'
		, city : [ 
			{ name : 'Bangalore' , ATM : [ 
						{ Location : 'Building No. 1139, 16th, B-Cross Road, Sector B, Bus Stand Road, Yelhanka New Town, Bengaluru - 560 064.' },
						{ Location : 'Wipro Ltd, 76P 80P, Doddakannahalli Village, Sarjapur Road, Bengaluru -560 035.' }
						] }
			] }];
	$scope.showAddress = function(){
		if($scope.state.code == 'MAH'){
			$scope.address = $scope.add1;
		}
		else if($scope.state.code == 'KA'){
			$scope.address = $scope.add2;
		}
		else{
			$scope.address = [];
		}
	};
	
	$scope.getStates();
});