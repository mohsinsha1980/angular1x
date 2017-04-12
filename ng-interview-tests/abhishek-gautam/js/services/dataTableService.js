/**
 * Service for fetching Table Data as part of exhibiting 'Angular Proficiency'
 * Creation Date : 11 SEPT 16
 */

testAngularApp
.factory(
		'TableDataService',
		[
				'$http',
				'$q',
				function($http, $q) {
					var deferred = $q.defer();
					return {
						getTableData :  function($scope) {
								return $http
									.get('data.json', {params:{}})
									.then(
											function(response) {
												return $q.resolve(response.data);
											},
											function(errResponse) {
												return $q.reject(errResponse);
											});
						}
					};
				} ]);
