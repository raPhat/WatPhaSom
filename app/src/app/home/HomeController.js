/**
 * Created by Bitee on 4/20/2016.
 */
(function () {
  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $rootScope, $location, $cookies, UserService) {
    var vm = this;
    vm.myInterval = 8000;
    vm.slides = [
      {
        image: 'http://all4desktop.com/data_images/original/4145439-pearl-bridge-in-japan.jpg'
      },
      {
        image: 'https://i.ytimg.com/vi/mnBXNuB1TGU/maxresdefault.jpg'
      }
    ];
  }
})();
