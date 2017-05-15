'use strict';

angular.module('spotifyApp')
	.directive('anArtist', function(){
		return {
			retrict: 'E',
			scope: {
				artist: '=artist'
			},
			templateUrl: 'views/chosenartist.html'
		};
	});