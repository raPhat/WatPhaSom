(function () {
  'use strict'
  angular
    .module('app')
    .factory('shoppingCartService', shoppingCartService)
    .factory('cartManagement', cartManagement);

  /** @ngInject */

  function shoppingCartService($resource) {
    return $resource('/shoppingcart/:id', {id: '@_id'}, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });
  }

  function cartManagement($resource) {
    return $resource('/shoppingcart/:action', {}, {
      addToCart: {
        method: 'POST',
        params: {'action': 'addToCart'}
      }
    });
  }
})();
