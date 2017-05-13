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
    var responseData;
      return {getResults: function (searchUrl, searchText, $http) {

        return $http.get(searchUrl).then(function(response) {
            return response.data
        });
      }
      }
  }]);

//return http promise