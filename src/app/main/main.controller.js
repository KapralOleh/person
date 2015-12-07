(function() {
  'use strict';

  angular
    .module('person')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(ngDialog) {
    var vm = this;
    vm.personImages = ['http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100'];
    vm.openSingIn = function () {
      ngDialog.closeAll();
      ngDialog.open({
        className: "ngdialog-theme-default login-width",
        template: 'sign/sing-in.html'
      })
    }
    vm.openSingUp = function () {
      ngDialog.closeAll();
      ngDialog.open({
        className: "ngdialog-theme-default login-width",
        template: 'sign/sing-up.html'
      })
    }
  }
})();
