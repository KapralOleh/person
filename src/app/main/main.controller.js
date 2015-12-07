(function() {
  'use strict';

  angular
    .module('person')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.personImages = ['http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100']
  }
})();
