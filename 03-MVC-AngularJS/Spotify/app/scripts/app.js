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
        
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
        })
    
    .state('chosenArtist', {
        url: '/artist/{id}',
        templateUrl: 'views/chosenartist.html',
        controller: 'ChosenartistCtrl'
    })
    
    .state('chosenAlbum', {
        url: '/album/{id}',
        templateUrl: 'views/chosenAlbum.html',
        controller: 'ChosenalbumCtrl'
    });
});