(function() {
  'use strict';

  angular
    .module('person')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController() {
    var vm = this;

    function getWeatherByCity(lang, fnOK, fnError, cityName) {
      $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q='
        + cityName + '&cnt=8&units=metric' + '&lang=' + lang + '&callback=?',
        function (data) {
          fnOK.call(this, data);
        }
      );
    }


    function getWeatherData(lang, fnOK, fnError) {
    navigator.geolocation.getCurrentPosition(locSuccess, locError);

    function locSuccess(position) {
        // Check cache
        var cache = localStorage.weatherCache && JSON.parse(localStorage.weatherCache);
        var currDate = new Date();
        // If the cache is newer than 30 minutes, use the cache
        if(cache && cache.timestamp && cache.timestamp > currDate.getTime() - 30*60*1000){
            fnOK.call(this, cache.data);
        } else {
            $.getJSON(
                'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + position.coords.latitude + '&lon=' +
                position.coords.longitude + '&cnt=8&units=metric' + '&lang=' + lang + '&callback=?',
                function (response) {
                    // Store the cache
                    localStorage.weatherCache = JSON.stringify({
                        timestamp: (new Date()).getTime(),  // getTime() returns milliseconds
                        data: response
                    });
                    // Call the function again
                    locSuccess(position);
                }
            );
        }
    }

    function locError(error) {
        var message = 'Location error. ';
        switch(error.code) {
            case error.TIMEOUT:
                message += 'A timeout occured! Please try again!';
                break;
            case error.POSITION_UNAVAILABLE:
                message += 'We can\'t detect your location. Sorry!';
                break;
            case error.PERMISSION_DENIED:
                message += 'Please allow geolocation access for this to work.';
                break;
            case error.UNKNOWN_ERROR:
                message += 'An unknown error occured!';
                break;
        }
        fnError.call(this, message);
    }
}

$(function(){
    $('#btnGetWeather').click(function () {
        getWeatherByCity('ua', dataReceived, showError, $('#inputCityName').val());
    });
     $('#inputCityName').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE )
        {
            $('#btnGetWeather').trigger('click');
            return false;
        }
    });
    getWeatherData( 'ua', dataReceived, showError);

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; // Відхилення від UTC  в мілісекундах
        var city = data.city.name;
        var country = data.city.country;
        $("#weather7Table tr:not(:first)").remove();
        $("#weatherDiv .slide").remove();
        $("#weather7Div .col-md-3.col-sm-6.col-xs-12.well").remove();


        $.each(data.list, function(){
            // "this" тримає об'єкт прогнозу звідси: http://openweathermap.org/forecast16
            var localTime = new Date(this.dt*1000 - offset); // конвертуємо час з UTC у локальний
            addWeather(
                this.weather[0].icon,
                moment(localTime).calendar(), // Використовуємо moment.js для представлення дати
                this.weather[0].description,
                Math.round(this.temp.day) + '&deg;C'
            );
        });
        $('.location').html(city + ', ' + '<b>' + country + '</b>'); // Додаємо локацію на сторінку
    }

    function addWeather(icon, day, condition, temp){
        var markupHome = '<div class="slide">'+
                        '<div class="box">' +
                            '<h2 class="text-center">' + day + '</h2>'  + '<img class="weather-icon" src="images/icons/'+ icon +'.png" />'+
                            '<div class="conditions">' +
                                '<span id="temp">' + temp + '</span>'  + '<br>' +
                                '<span id="condition">' + condition + '</span>' +
                            '</div>' +
                         '</div>' +
                     '</div>';
        weatherDiv.innerHTML += markupHome;

        var markup8table = '<tr>'+
                '<td>' + day + '</td>' +
                '<td>' + '<img class="weather-icon" src="images/icons/'+
                  icon
                  +'.png" />' + '</td>' +
                '<td>' + temp + '</td>' +
                '<td>' + condition + '</td>'
            + '</tr>';
        weather8Table.insertRow(-1).innerHTML = markup8table;

        var markup8Div = '<div class="col-md-3 col-sm-6 col-xs-12 well">'+
                        '<div>' +
                            '<h3 class="text-center">' + day + '</h3>'  + '<img class="weather-icon" src="images/icons/'+ icon +'.png" />'+
                            '<div class="conditions">' +
                                '<span id="temp">' + temp + '</span>'  + '<br>' +
                                '<span id="condition">' + condition + '</span>' +
                            '</div>' +
                         '</div>' +
                     '</div>';
        weather8Div.innerHTML += markup8Div;

    }

    function showError(msg){
        $('#error').html('Сталася помилка: ' + msg);
    }

});



  }
})();
