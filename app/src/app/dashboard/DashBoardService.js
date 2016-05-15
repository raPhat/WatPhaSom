(function () {
  'use strict';
  angular
    .module('app')
    .factory('DashBoardService', DashBoardService);

  /** @ngInject */
  function DashBoardService($resource) {
    return $resource ('/user/:action', {},
      {
        authenticate: {
          method: 'POST',
          params: {'action': 'authenticate'},
          header: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      })
  }

})();
