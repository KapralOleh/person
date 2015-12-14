(function() {
  'use strict';

  angular
    .module('person')
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
      });
    })
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, ngDialogProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    ngDialogProvider.setDefaults({
      className: 'ngdialog-theme-default',
      plain: true,
      showClose: true,
      closeByDocument: true,
      closeByEscape: true
    });
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
