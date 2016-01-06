(function() {
  'use strict';

  angular
    .module('person', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr','angular-carousel','ngDialog','uiGmapgoogle-maps','ngMaterial','duScroll','ngResource','vAccordion'])
    .factory('instagram', ['$http',
      function($http) {
        return {
          fetchPopular: function(callback) {
            var endPoint = "https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";
            $http.jsonp(endPoint).success(function(response) {
              callback(response.data);
            });
          }
        }
      }
    ]);

})();
