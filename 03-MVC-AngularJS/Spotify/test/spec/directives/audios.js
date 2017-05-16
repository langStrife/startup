'use strict';

describe('Directive: audios', function () {

  // load the directive's module
  beforeEach(module('spotifyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<audios></audios>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the audios directive');
  }));
});
