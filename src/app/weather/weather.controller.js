(function() {
  'use strict';

  angular
    .module('person')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($resource,ngDialog) {
    var vm = this;
    var lang = 'ua';
    vm.currentTab = 'table';
    // vm.weather = [];
    vm.country = '';
    vm.cityName = '';
    vm.Math = Math;

    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
      var crd = pos.coords;
      vm.resource = $resource(
        'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + crd.latitude + '&lon=' +
                crd.longitude + '&APPID=c5921925e0f07a88ab8d9003fa7401d8&cnt=7&units=metric' + '&lang=' + lang + '&callback=JSON_CALLBACK',
        {
          clallback: 'JSON_CALLBACK'
        },
        {
          getExchange: {
            method: 'JSONP'
          }
        }
      );
      vm.resource.getExchange().$promise.then(
          function( weather ) {
            vm.weather = weather.list;
            vm.cityName = weather.city.name;
            vm.country = weather.city.country;
            console.log( "Good!",weather.list );
          },
          function( error ) {
            console.log( "Something went wrong!" );
          }
      );

      // $.getJSON(
      //   'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + crd.latitude + '&lon=' +
      //           crd.longitude + '&APPID=c5921925e0f07a88ab8d9003fa7401d8&cnt=7&units=metric' + '&lang=' + lang + '&callback=?',
      //   function (data) {
          // vm.weather = data.list;
          // vm.cityName = data.city.name;
          // vm.country = data.city.country;
      //     console.log(data)
          // if(!$scope.$$phase) {
          //   $scope.apply()
          // }
      //   }
      // );

      console.log('Your current position is:');
      console.log('Latitude : ' + crd.latitude);
      console.log('Longitude: ' + crd.longitude);
      console.log('More or less ' + crd.accuracy + ' meters.');
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    vm.getWeatherByCity= function() {
      vm.resource = $resource(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q='
        + vm.city + '&APPID=c5921925e0f07a88ab8d9003fa7401d8&cnt=7&units=metric' + '&lang=' + lang + '&callback=JSON_CALLBACK',
        {
          clallback: 'JSON_CALLBACK'
        },
        {
          getExchange: {
            method: 'JSONP'
          }
        }
      );
      vm.resource.getExchange().$promise.then(
          function( weather ) {
            vm.weather = weather.list;
            vm.cityName = weather.city.name;
            vm.country = weather.city.country;
            console.log( "Good!" );
          },
          function( error ) {
            console.log( "Something went wrong!" );
          }
      );
    }
    // vm.showWeather = function (){
    //   ngDialog.closeAll();
    //   ngDialog.open({
    //     className: "ngdialog-theme-default",
    //     template: '{{vm.country}}'
    //   });
    // }


  }
})();
