(function() {
  'use strict';

  angular
    .module('person')
    .controller('ExchangeController', ExchangeController);

  /** @ngInject */
  function ExchangeController($http,$resource) {
    var vm = this;
    // var url = 'http://nbu1.bank.gov.ua/NBUStatService/v1/statdirectory?exchange&date=20151221&json?callback=JSON_CALLBACK';
    var url = 'app/exchange/exchange.json';
    vm.exchange = [];
    $http.get(url)
    .then(
      function(response) {
        vm.exchange = response.data;
      },
      function(response) {
        console.log('error')
      }
    )
    // vm.resource = $resource(
    //   url,
    //   {
    //     clallback: 'JSON_CALLBACK'
    //   },
    //   {
    //     getExchange: {
    //       method: 'JSONP'
    //     }
    //   }
    // );
    // vm.resource.getExchange().$promise.then(
    //     function( exchange ) {
    //         vm.exchange = exchange;
    //         console.log( "Good!" );
    //     },
    //     function( error ) {
    //       console.log( "Something went wrong!" );
    //     }
    // );
  }
})();
