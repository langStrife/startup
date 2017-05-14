'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:ChosenartistCtrl
 * @description
 * # ChosenartistCtrl
 * Controller of the spotifyApp
 */
angular.module('spotifyApp')
  .controller('ChosenartistCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

  	$scope.albumesLite = [];
	$scope.albumesFull = [];
	var artistUrl = 'https://api.spotify.com/v1/artists/' + $scope.artists.id + '/albums';
	
	function init() {
		console.log($scope.artist);
		
		//getAlbumService


		$http.get('https://api.spotify.com/v1/artists/' + $scope.artists.id + '/albums')
			.then(function(response){
				$scope.albumesLite = response.data.items;
				for(var i = 0; i < $scope.albumesLite.length; i++){		
					$http.get('https://api.spotify.com/v1/albums/'+$scope.albumesLite[i].id)
					.then(function(response){
						$scope.albumesFull.push(response.data);
					},function(){});
				}
			},function(){});
	}
	init();
}]);
