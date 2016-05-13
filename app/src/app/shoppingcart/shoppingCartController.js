(function () {
  'use strict';

  angular
    .module('app')
    .controller('showShoppingCartController', ShowShoppingCartController);


  /** @ngInject */
  function ShowShoppingCartController(shoppingCartService, $location, $rootScope, $routeParams) {
    var vm = this;
    var id = $routeParams.id;
    shoppingCartService.get({id: id}, function (data) {
      vm.cart = data;
    })

    //$on('$locationChangeStart', function () {
    //  $rootScope.cartUpdateSuccess = false;
    //
    //});

    vm.updateCart = function () {
      shoppingCartService.update({id: id}, vm.cart, function () {
        $rootScope.cartUpdateSuccess = true;

      });
    }

    vm.totalEach = function (index) {
      return vm.cart.selectedProducts[index].product.totalPrice * vm.cart.selectedProducts[index].amount;
    }

    vm.total = function () {
      var total = 0;
      angular.forEach(vm.cart.selectedProducts, function (item) {
        total += item.amount * item.product.totalPrice;
      })

      return total;
    }
  }
})();
