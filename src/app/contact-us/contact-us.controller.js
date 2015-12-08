(function() {
  'use strict';

  angular
    .module('person')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController() {
    var vm = this;
    vm.show = true;
    vm.map = { center: { latitude: 49.802981, longitude: 24.011145 }, zoom: 16 };
    vm.options = {scrollwheel:true};
    vm.marker = {
      id: 0,
      coords: {
        latitude: 49.802981,
        longitude: 24.011145
      },
      options: { draggable: true },
      show: false
    };
    vm.windowOptions = {
      visible: false
    };
    vm.title = 'Hello';
  }
})();
