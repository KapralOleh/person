(function() {
  'use strict';

  angular
    .module('person')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController() {
    var vm = this;
    var lang = 'ua';
    vm.weather = [];
    vm.country = '';
    vm.cityName = '';
    vm.Math = Math;
    console.log(moment(1451124000).format('dddd'));

    vm.getWeatherByCity= function() {
      $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q='
        + vm.city + '&APPID=c5921925e0f07a88ab8d9003fa7401d8&cnt=7&units=metric' + '&lang=' + lang + '&callback=?',
        function (data) {
          vm.weather = data.list;
          vm.cityName = data.city.name;
          vm.country = data.city.country;
        }
      );
    }

    function success(pos) {
      var crd = pos.coords;
      $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + crd.latitude + '&lon=' +
                crd.longitude + '&APPID=c5921925e0f07a88ab8d9003fa7401d8&cnt=7&units=metric' + '&lang=' + lang + '&callback=?',
        function (data) {
          vm.weather = data.list;
          vm.cityName = data.city.name;
          vm.country = data.city.country;
          console.log(data)
        }
      );

      console.log('Your current position is:');
      console.log('Latitude : ' + crd.latitude);
      console.log('Longitude: ' + crd.longitude);
      console.log('More or less ' + crd.accuracy + ' meters.');
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error);

  }
})();
