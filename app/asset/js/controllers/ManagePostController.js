app.controller('ManagePostCtrl', ['$scope', 'API', '$cookies', '$http','HouseService','$location', function($scope, API, $cookies, $http, HouseService, $location){
	var urlPost = API.getUserPost($cookies.get('user.id'));
	$scope.currentPage = 0;
	$scope.pageSize = 20;
	console.log(urlPost);
	$http.get(urlPost).then(function(res){
		$scope.houses = res.data.houses;
		console.log($scope.houses);
		$scope.numberOfPages = function(){
			return Math.ceil($scope.houses.length/$scope.pageSize); 
		};
	});

	$scope.deleteHouse = function(id){
		HouseService.deleteHouse($cookies.get('user.email'), $cookies.get('user.token'), id)
		.then(function(){
			$location.path('/manage-post');
		}, function(){
			$location.path('/manage-post');
		});
	};
}]);