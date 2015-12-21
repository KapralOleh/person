(function() {
  'use strict';

  angular
    .module('person')
    .directive('menuIcon', menuIcon);

  /** @ngInject */
  function menuIcon() {
    var directive = {
      templateUrl: '../../assets/images/menu.svg'
    };
    return directive;
  }

})();
