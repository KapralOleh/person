(function() {
  'use strict';

  angular
    .module('person')
    .controller('InstagramController', InstagramController);

  /** @ngInject */
  function InstagramController(instagram) {
    var vm = this;
      vm.pics = [];
      vm.have = [];
      vm.orderBy = "-likes.count";
      vm.getMore = function() {
        instagram.fetchPopular(function(data) {
          for(var i=0; i<data.length; i++) {
            if (typeof vm.have[data[i].id]==="undefined") {
              vm.pics.push(data[i]) ;
              vm.have[data[i].id] = "1";
            }
          }
        });
      };
      vm.getMore();
  }


})();
