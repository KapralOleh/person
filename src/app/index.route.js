(function() {
  'use strict';

  angular
    .module('person')
    .config(["$locationProvider", function($locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $locationProvider.hashPrefix('!');
    }])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'HomeCtrl'
      })
      .state('Contact', {
        url: '/contact',
        templateUrl: 'app/contact-us/contact-us.html',
        controller: 'ContactController',
        controllerAs: 'ContactCtrl'
      })
      .state('Terms', {
        url: '/terms',
        templateUrl: 'app/terms/terms.html',
        controller: 'TermsController',
        controllerAs: 'TermsCtrl'
      })
      .state('Faq', {
        url: '/faq',
        templateUrl: 'app/faq/faq.html',
        controller: 'FaqController',
        controllerAs: 'FaqCtrl'
      })
      .state('Exchange', {
        url: '/exchange',
        templateUrl: 'app/exchange/exchange.html',
        controller: 'ExchangeController',
        controllerAs: 'ExchangeCtrl'
      })
      .state('Persons', {
        url: '/persons',
        templateUrl: 'app/persons/persons.html',
        controller: 'PersonController',
        controllerAs: 'PersonCtrl'
      })
      .state('Weather', {
        url: '/weather',
        templateUrl: 'app/weather/weather.html',
        controller: 'WeatherController',
        controllerAs: 'WeatherCtrl'
      })
      .state('Instagram', {
        url: '/instagram',
        templateUrl: 'app/instagram/instagram.html',
        controller: 'InstagramController',
        controllerAs: 'InstagramCtrl'
      })
      .state('personDetail', {
        url: '/persons/:id',
        templateUrl: 'app/persons/personid/personid.html',
        controller: 'PersonController',
        controllerAs: 'PersonCtrl'
      });

    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.headers.common['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    $httpProvider.defaults.headers.common['Pragma'] = 'no-cache';
  }
})();
