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
        templateUrl: 'views/chosenartist.html',
        controller: 'ChosenartistCtrl',
        url: '/artist/:name',
        resolve:{
            pickedArtist: ['$stateParams', function($stateParams){
            return $stateParams.artist;
            }]
        }
    });
});