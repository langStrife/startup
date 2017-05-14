'use strict';

describe('Controller: ChosenartistCtrl', function () {

  // load the controller's module
  beforeEach(module('spotifyApp'));

  var ChosenartistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChosenartistCtrl = $controller('ChosenartistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChosenartistCtrl.awesomeThings.length).toBe(3);
  });
});
