(function () {
  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, $route) {

    $scope.switchPage = function() {
      var sp = $route.current.originalPath.split("/");
      if( sp.length > 1 ) {
        if ( sp[1] == "admin" ) {
          return true;
        }
      }
      return false;
    }

  }

})();
