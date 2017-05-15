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

  	return {getAlbums: function (searchUrl, $http) {

        return $http.get(searchUrl).then(function(response) {
            console.log(response.data.artists.items[0].name);
            return response.data;
        });
      }
  	};
}]);
