'use strict';

/**
 * @ngdoc service
 * @name spotifyApp.getAlbumService
 * @description
 * # getAlbumService
 * Service in the spotifyApp.
 */
angular.module('spotifyApp')
  .factory('getAlbumService', ['$http', function(http) {

  	return {getResults: function (searchUrl, $http) {

        return $http.get(searchUrl).then(function(response) {
            return response.data;

  });
    }};
}]);
