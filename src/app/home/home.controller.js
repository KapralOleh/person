(function() {
  'use strict';

  angular
    .module('person')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;
    vm.personImages = ['http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100'];
    vm.items = [
      {
          src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrTgaP_TaPuS035ynJDnQbYWJ1RO_bgDHEdImWo25MCuO-58-9Bg',
          w: 360,
          h: 360
      },
      {
          src: 'http://itsadeliverything.com/wordpress/images//Dont-Panic.jpg',
          w: 1024,
          h: 1024
      }
    ];
    vm.options = {
      index: 0
    };

  }
})();
