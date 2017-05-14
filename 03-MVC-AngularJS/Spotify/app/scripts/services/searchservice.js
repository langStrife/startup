'use strict';

/**
 * @ngdoc service
 * @name spotifyApp.searchService
 * @description
 * # searchService
 * Factory in the spotifyApp.
 */
angular.module('spotifyApp')
  .factory('searchService', ['$http', function(http) {
      return {getResults: function (searchUrl, $http) {

        return $http.get(searchUrl).then(function(response) {
        	console.log("This is what searchService returns: " + response.data.artists.items[0].name);
            return response.data;
        });
      }};
  }]);

//return http promise