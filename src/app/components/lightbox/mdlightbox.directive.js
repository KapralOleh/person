(function() {
  'use strict';

  angular
    .module('person')
    .directive('mdLightbox', ['$mdDialog', function($mdDialog){
      return {
        link: function($scope, elem, attrs){
          elem.addClass('image-click');
          elem.on('click',function(){
            var image = attrs.src;
            var title = attrs.mdLightboxTitle;
            var desc = attrs.mdLightboxDesc;
            showLightboxModal(image, title, desc);
          });
          //Lightbox Modal
          function showLightboxModal(image, title, desc) {
            var confirm = $mdDialog.confirm({
              templateUrl: 'app/components/lightbox/mdlightbox.html',
              clickOutsideToClose: true,
              controller: lightboxController
            });
            $mdDialog.show(confirm);

            function lightboxController($scope, $mdDialog) {
              $scope.image = image;
              $scope.title = title;
              $scope.desc = desc;
              $scope.cancel = function() {
                $mdDialog.cancel();
              };
            }
          }
        }
      }
    }]);
})();

