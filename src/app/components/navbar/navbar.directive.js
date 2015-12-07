(function() {
  'use strict';

  angular
    .module('person')
    .directive('personNavbar', personNavbar);

  /** @ngInject */
  function personNavbar() {
    var directive = {
      templateUrl: 'app/components/navbar/navbar.html'
    };
    return directive;
  }

})();
