'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spotifyApp
 */

angular.module('spotifyApp')
.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
  
    $scope.artists = [];
    $scope.searchText = "";

    //pasar a un factory searchService que va a inyectar $http
    // una vez inyectado en la declaracion del controller, dentro de getResults en lugar de 
    // $http... searchService.getResults().then 
    $scope.getResults = function(){
 		var searchUrl = 'https://api.spotify.com/v1/search?q=' + $scope.searchText + '&type=artist';

 		

    	$http({
	     	method: 'GET',
	  		url: searchUrl
		}).then(function successCallback(response) {
    		$scope.artists = response.data.artists.items;
  		});
    }


/*
 $scope.getResults = function(){
 	searchService.getResults(url, $scope.searchText).then(function(){
	
 	})
*/
   
  }]);