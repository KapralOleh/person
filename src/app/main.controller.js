(function() {
  'use strict';

  angular
    .module('person')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope,ngDialog) {
    var vm = this;
    var scope = $rootScope;
    var showMenu = false;

    vm.openSingIn = function () {
      ngDialog.closeAll();
      ngDialog.open({
        template: '<h1>Sign In</h1>' +
       '<form "ng-submit">' +
         '<input type="text" class="person-input field" placeholder="Email">' +
         '<input type="text" class="person-input field" placeholder="Password">'+
         '<input type="submit" class="person-input button" value="Login">' +
       '</form>',
        className: 'ngdialog-theme-default'
      });
    }
    vm.openSingUp = function () {
      ngDialog.closeAll();
      ngDialog.open({
        className: "ngdialog-theme-default",
        template: '<h1>Sign Up</h1>' +
       '<form "ng-submit">' +
         '<input type="text" class="person-input field" placeholder="Name">' +
         '<input type="text" class="person-input field" placeholder="Email">' +
         '<input type="text" class="person-input field" placeholder="Password">'+
         '<input type="text" class="person-input field" placeholder="Confirm password">'+
         '<input type="submit" class="person-input button" value="Join">' +
       '</form>'
      });
    }

    vm.toogleMenu = function () {
      vm.showMenu = !vm.showMenu;
      vm.showMenu ? vm.color = "#68d3f3" : vm.color = "#fff";
    }
    vm.color = "#fff"

    scope.$on(
      "$stateChangeSuccess",
      function (){
        vm.showMenu = false;
        vm.showMenu ? vm.color = "#68d3f3" : vm.color = "#fff";
      }
    );
  }
})();
