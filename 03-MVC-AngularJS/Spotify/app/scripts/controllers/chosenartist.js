'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:ChosenartistCtrl
 * @description
 * # ChosenartistCtrl
 * Controller of the spotifyApp
 */
angular.module('spotifyApp')
  .controller('ChosenartistCtrl', ['$scope', '$stateParams', '$http','searchService', function ($scope, $stateParams, $http, searchService) {

  	$scope.albums = [];
	
	
	function init() {
		$scope.artist = $stateParams.id;
		console.log($scope.artist);

		var albumsUrl = 'https://api.spotify.com/v1/artists/' + $scope.artist + '/albums';
		searchService.getResults(albumsUrl, $http).then(function successCallback(data){	
 			$scope.albums = data.items;
 			}
 		);
	}
	init();
}]);