/**
 * Main Service 
 Service with promise (Resolve and Reject) to get data
 */
 
 
 
 mainApp
.factory(
		'DisplayDataService',
		[
				'$http',
				'$q',
				function($http, $q) {
					var deferred = $q.defer();

					return {

						getData :  function($scope) {
							
							return $http
									.get('tableValues.json', {params:{}})
									.then(
											function(response) {
												console.log("JSON Response for table data:::" + JSON.stringify(response.data));
												return $q.resolve(response.data);
											},
											function(errResponse) {
												alert('Error while fetching JSON.Please enable XMLHttpRequest in your browser or test in Mozilla Firefox');
												console.error('Error while fetching table data object');
												return $q.reject(errResponse);
											});
						}

					};

				} ]);