'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:ChosenalbumCtrl
 * @description
 * # ChosenalbumCtrl
 * Controller of the spotifyApp
 */
angular.module('spotifyApp')
  .controller('ChosenalbumCtrl', ['$scope', '$stateParams', '$http','searchService', function ($scope, $stateParams, $http, searchService) {
  	
  	$scope.album = [];
	
	
	function init() {
		$scope.album = $stateParams.id;
		console.log($scope.album);

		var albumsUrl = 'https://api.spotify.com/v1/albums/' + $scope.album;
		searchService.getResults(albumsUrl, $http).then(function successCallback(data){	
 			$scope.album = data;
 			console.log("album= ", $scope.album);
 			});

 		var tracksUrl = albumsUrl + '/tracks';
 		searchService.getResults(tracksUrl, $http).then(function successCallback(data){	
 			$scope.tracks = data.items;
 			console.log("tracks= ", $scope.tracks);
 			}
 		);
	}
	init();
}]);