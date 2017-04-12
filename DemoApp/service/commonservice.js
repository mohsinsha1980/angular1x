demoApp.service('commonServiceApi', function(){
   var commonService = {};
   var StateList = [];
   
   commonService.getStateList = function(){
		if(StateList.length == 0 ){
			return StateList = [ { stateDesc : 'Maharashtra' , stateCd : 'MAH' },{ stateDesc : 'karnataka' , stateCd : 'KA' }];
		}
		else{
			return StateList;
		}
   }
   return commonService;
});