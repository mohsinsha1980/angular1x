var myApp = angular.module('myApp', []);
 
myApp.directive('myDirective', function () {
	return {
		template: '<h1>This is myDirective</h1>',
		
		restrict: 'E',
		
		replace: true,
		
		link: function (scope, element, attrs) {
			
			element.prepend('this is prepend text <hr/>');
			
		    element.append('<hr/> this is append text');
			
			element.addClass('btn btn-primary');
			
			element.text('this is the myDirective directive');
			
			element.bind('click', function(event) {
				
				alert('Adding/Removing "btn btn-primary" Classes!')
				element.toggleClass('btn btn-primary');
				
			});
		}
	};
});