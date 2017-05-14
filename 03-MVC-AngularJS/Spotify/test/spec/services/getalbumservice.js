'use strict';

describe('Service: getAlbumService', function () {

  // load the service's module
  beforeEach(module('spotifyApp'));

  // instantiate service
  var getAlbumService;
  beforeEach(inject(function (_getAlbumService_) {
    getAlbumService = _getAlbumService_;
  }));

  it('should do something', function () {
    expect(!!getAlbumService).toBe(true);
  });

});
