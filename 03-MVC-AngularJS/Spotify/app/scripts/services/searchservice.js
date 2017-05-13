'use strict';

/**
 * @ngdoc service
 * @name spotifyApp.searchService
 * @description
 * # searchService
 * Factory in the spotifyApp.
 */
angular.module('spotifyApp')
  .factory('searchService', function () {
    // Service logic
    // ...

    

    // Public API here
    return {
      getResults: function (url, searchText) {
        var searchUrl = url  + searchText + '&type=artist';

        return $http.get('').success(function(response) {
            return response.data;
        });;
      }
    };
  });

//return http promise