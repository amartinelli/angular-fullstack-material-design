'use strict';

describe('Controller: RootnavCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullstackMaterialDesignApp'));

  var RootnavCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RootnavCtrl = $controller('RootnavCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
