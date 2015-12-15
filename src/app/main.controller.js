(function() {
  'use strict';

  angular
    .module('person')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(ngDialog) {
    var vm = this;

    vm.openSingIn = function () {
      ngDialog.closeAll();
      ngDialog.open({
        template: '/app/components/sign/sign-in.html',
        className: 'ngdialog-theme-default'
      });
    }
    vm.openSingUp = function () {
      ngDialog.closeAll();
      ngDialog.open({
        className: "ngdialog-theme-default",
        template: 'sign/sing-up.html'
      });
    }
  }
})();
