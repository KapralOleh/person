(function() {
  'use strict';

  angular
    .module('person')
    .directive('shareBlock', [function($){
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
              templateUrl: 'app/components/share/share.html',
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

// $('#fbshare').click(function () {
//         var url = 'http://www.facebook.com/sharer.php?s=100';
//         url += '&p[title]=' + encodeURIComponent($('#shareplace').data('title'));
//         url += '&p[summary]=' + encodeURIComponent($('#shareplace').data('description'));
//         url += '&p[url]=' + encodeURIComponent($('#shareplace').data('url'));
//         url += '&p[images][0]=' + encodeURIComponent($('#shareplace').data('iamge'));
//         window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
//     });
//     $('#twshare').click(function () {
//         var url = 'http://twitter.com/share?';
//         url += 'text=' + encodeURIComponent($('#shareplace').data('title') + ' @Rizdviane ');
//         url += '&url=' + encodeURIComponent($('#shareplace').data('url'));
//         window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
//     });

//     $('#gpshare').click(function () {
//         var url = 'https://plus.google.com/share?url=' + $('#shareplace').data('url');
//         window.open(url, '', 'toolbar=0,status=0,width=500,height=600');
//     });
