(function() {
  'use strict';

  angular
    .module('person')
    .config(["$locationProvider", function($locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('Contact', {
        url: '/contact',
        templateUrl: 'app/contact-us/contact-us.html',
        controller: 'ContactController',
        controllerAs: 'ContactCtrl'
      })
      .state('Persons', {
        url: '/persons',
        templateUrl: 'app/persons/persons.html',
        controller: 'PersonCtrl',
        controllerAs: 'PersonCtrl'
      })
      .state('personDetail', {
        url: '/persons/:id',
        templateUrl: 'app/persons/personid/personid.html',
        controller: 'PersonCtrl',
        controllerAs: 'PersonCtrl'
      });

    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.headers.common['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    $httpProvider.defaults.headers.common['Pragma'] = 'no-cache';
  }
})();
