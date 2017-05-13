'use strict';

/**
 * @ngdoc overview
 * @name spotifyApp
 * @description
 * # spotifyApp
 *
 * Main module of the application.
 */
var myApp = angular.module('spotifyApp', [
    'ui.router',
	'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {
        
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
    })
    ;
}

/*    .state('searchResult', {
        url: '/home/:search',
        templateUrl: '/views/searchResult.html',
        controller: 'searchResultCtrl'
        resolve:{
            artistId: ['$stateParams', function($stateParams){
            return $stateParams.search;
            }]
        }
    })
    */
);