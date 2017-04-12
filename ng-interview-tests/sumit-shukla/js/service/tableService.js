/**
 *  Service Implementation for Getting Table Data  
 *  Created By : 45075 
 *  Created On : 10 SEP 16
 */
 
 
 
 angularApp
.factory(
		'TableService',
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
												return $q.resolve(response.data); // Use of Resolve
											},
											function(errResponse) {
												console.error('Error while fetching table data object');
												return $q.reject(errResponse); // Use of Reject
											});
						}

					};

				} ]);