(function() {
  'use strict';

  angular
    .module('person')
    .directive('personFooter', personFooter);

  /** @ngInject */
  function personFooter() {
    var directive = {
      templateUrl: 'app/components/footer/footer.html'
    };
    return directive;
  }

})();
