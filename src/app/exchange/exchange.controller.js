(function() {
  'use strict';

  angular
    .module('person')
    .controller('ExchangeController', ExchangeController);

  /** @ngInject */
  function ExchangeController($http,$resource) {
    var vm = this;
    // var url = 'http://nbu1.bank.gov.ua/NBUStatService/v1/statdirectory?exchange&date=20151215&json';
    // var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22lviv%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
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


    // $.getJSON( url, function( data ) {
    //   vm.exchange = data;
    //   console.log(data);
    // });



  //   vm.resource = $resource(
  //     url,
  //     {
  //       clallback: 'JSON_CALLBACK'
  //     },
  //     {
  //       getExchange: {
  //         method: 'JSONP'
  //       }
  //     }
  //   );
  //   vm.resource.getExchange().$promise.then(
  //       function( exchange ) {
  //           vm.exchange = exchange;
  //           console.log( "Good!" );
  //       },
  //       function( error ) {
  //         console.log( "Something went wrong!" );
  //       }
  //   );
  }
})();
