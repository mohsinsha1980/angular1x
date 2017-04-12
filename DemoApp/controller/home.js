demoApp.controller('homeController', function($scope,$http) {
$scope.loadDefault = function(){
	$http({
		method: 'GET',
		url: '',
		headers: {
			'Content-type': 'application/json'
		},
	  success: function(data) {
               
		},
		error: function(data) {
			
		}
	})
	
};
$scope.startSlider = function(){
		var options = { $AutoPlay: true};
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
};
$scope.startSlider();
});