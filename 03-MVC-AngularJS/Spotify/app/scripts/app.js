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
/*    })
    .state('chosenArtist', {
        url: '/home/:albums',
        templateUrl: '/views/chosenartist.html',
        controller: 'ChosenartistCtrl'
    }
        resolve:{
            artistId: ['$stateParams', function($stateParams){
            return $stateParams.search;
            }]
        }
    )*/
})
    .state('chosenArtist', {
        templateUrl: '/views/chosenartist.html',
        controller: 'ChosenartistCtrl',
        param: {pickedArtist: null},
        url: '/artist'
    });
});