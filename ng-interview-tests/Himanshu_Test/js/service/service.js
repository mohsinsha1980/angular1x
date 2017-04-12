/**
 * Service 
 */
 
 
 
 angularTestExcersie
.factory(
		'TableDataService',
		[
				'$http',
				'$q',
				function($http, $q) {
					var deferred = $q.defer();

					return {

						getTableData :  function($scope) {
							//console.log('societyId:::' + societyId)
							return $http
									.get('data.json', {params:{}})
									.then(
											function(response) {
												console.log("actual response:::" + JSON.stringify(response.data));
												return $q.resolve(response.data);
											},
											function(errResponse) {
												console
														.error('Error while fetching table data object');
												return $q
														.reject(errResponse);
											});
						}

					};

				} ]);