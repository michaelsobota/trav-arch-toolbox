angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
	// $http({
	// 	method: 'GET',
	// 	url: 'https://api-runscope-com-8hjugq5op1av.runscope.net/buckets/8hjugq5op1av/tests/8c6a3217-42d8-4d58-96a5-a5e1de85d173/results',
	// 	headers: {'Authorization': 'Bearer 8b60a2b7-0194-4868-bad9-6e3e2f1972b8'}
	// }).then(function successCallback(response) {
	// 	$scope.data = response.data.data;
	// }, function errorCallback(response) {
	// 	$scope.data = response.data;
	// });
	$http({
		method: 'GET',
		url: 'http://localhost:28017/apihealth/apiHealthHistory/'
	}).then(function successCallback(response) {
		$scope.data = response.data.data;
	}, function errorCallback(response) {
		$scope.data = response.data;
	});
});