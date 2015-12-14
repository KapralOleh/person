(function() {
  'use strict';

  angular
    .module('person')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;
    vm.personImages = ['http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100'];
    vm.images = ['../../assets/images/test.png','http://placehold.it/100x100','http://placehold.it/100x100','http://placehold.it/100x100']
    angular.element('#image-cropper').cropit({
      imageState: {
        src: 'http://lorempixel.com/500/400/',
      }
    });
  }
})();
