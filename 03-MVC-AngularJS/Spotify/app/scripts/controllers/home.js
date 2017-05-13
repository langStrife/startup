'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spotifyApp
 */

angular.module('spotifyApp')
.controller('HomeCtrl', ['$scope', '$http', 'searchService', function ($scope, $http, searchService) {
  
    $scope.artists = [];
    $scope.searchText = "";

    $scope.getResults = function(){
 		var searchUrl = 'https://api.spotify.com/v1/search?q=' + $scope.searchText + '&type=artist';
 		searchService.getResults(searchUrl, $scope.searchText, $http).then(function successCallback(data){
 			$scope.artists = data.artists.items;
 		})
    }
   
  }]);