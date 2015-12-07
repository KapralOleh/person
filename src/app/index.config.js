(function() {
  'use strict';

  angular
    .module('person')
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
      closeByEscape: true,
      trapFocus: false
    });
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
