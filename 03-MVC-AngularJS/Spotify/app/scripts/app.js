'use strict';

/**
 * @ngdoc overview
 * @name spotifyApp
 * @description
 * # spotifyApp
 *
 * Main module of the application.
 */
var myApp = angular
.module('spotifyApp', [
	'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch'
    ]);

  myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		controller: 'NavbarCtrl',
        templateUrl: 'views/navbar.html'
    });
});
