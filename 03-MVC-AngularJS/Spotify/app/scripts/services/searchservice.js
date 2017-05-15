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
            return response.data;
        });
      }};
  }]);