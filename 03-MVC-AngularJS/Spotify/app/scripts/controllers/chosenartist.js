'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:ChosenartistCtrl
 * @description
 * # ChosenartistCtrl
 * Controller of the spotifyApp
 */
angular.module('spotifyApp')
  .controller('ChosenartistCtrl', ['$scope', '$stateParams', '$http', 'pickedArtist', function ($scope, $stateParams, $http) {

  	$scope.albumesLite = [];
	$scope.albumesFull = [];
	
	
	function init() {
		$scope.artist = $stateParams.pickedArtist;
		$scope.getAlbums = function(){

			var albumsUrl = 'https://api.spotify.com/v1/artists/' + $scope.artists.id + '/albums';


			getAlbumService.getAlbums(albumsUrl, $http).then(function successCallback(data){
 			$scope.albumesLite = data.artists.items;
 			console.log("albumesLite");
 			var albumsLiteUrl = 'https://api.spotify.com/v1/albums/'+$scope.albumesLite[i].id;
 			for(var i = 0; i < $scope.albumesLite.length; i++){
 				getAlbumService.getAlbums(albumsLiteUrl, $http).then(function successCallback(data){
 					$scope.albumesFull.push(response.data);
 			}

 		);
 			}});
		}};

	init();
}]);
