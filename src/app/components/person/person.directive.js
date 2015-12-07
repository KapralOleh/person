(function() {
  'use strict';

  angular
    .module('person')
    .directive('personItem', personItem);

  /** @ngInject */
  function personItem() {
    var directive = {
      templateUrl: 'app/components/person/person.html'
    };
    return directive;
  }

})();
