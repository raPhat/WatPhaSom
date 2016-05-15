(function () {
  angular
    .module('app')
    .controller('loginAdminController', loginAdminController)
    .controller('dashBoardController', dashBoardController);

  /** @ngInject */
  function dashBoardController($scope, $rootScope) {
    var vm = this;
  }

  /** @ngInject */
  function loginAdminController($scope, $rootScope) {
    var vm = this;
  }

})();
