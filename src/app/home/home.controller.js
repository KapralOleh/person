(function() {
  'use strict';

  angular
    .module('person')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;
    vm.personImages = ['http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100','http://placehold.it/200x100'];
    vm.items = [
      {
          src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrTgaP_TaPuS035ynJDnQbYWJ1RO_bgDHEdImWo25MCuO-58-9Bg',
          w: 360,
          h: 360
      },
      {
          src: 'http://itsadeliverything.com/wordpress/images//Dont-Panic.jpg',
          w: 1024,
          h: 1024
      }
    ];
    vm.options = {
      index: 0
    };
    var tl1 = new TimelineMax();
    tl1.to('#ad',1,{
      opacity:1
    })
    .from('#myad-txt2', 1.3, {
      top: -100,
      ease: Power2.easeOut
    })
    .to('#myad-ltr01',2, {
      top: 210,
      left: -70,
      rotation: -100,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr02',2, {
      top: 210,
      left: -60,
      rotation: 45,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr03',2, {
      top: 210,
      left: -50,
      rotation: 200,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr04',2, {
      top: 210,
      left: -40,
      rotation: -130,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr05',2, {
      top: 210,
      left: -30,
      rotation: 140,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr06',2, {
      top: 210,
      left: -20,
      rotation: 125,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr07',2, {
      top: 210,
      left: -10,
      rotation: 95,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr08',2, {
      top: 210,
      left: 0,
      rotation: -80,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr09',2, {
      top: 210,
      left: 10,
      rotation: 220,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr10',2, {
      top: 210,
      left: 20,
      rotation: -310,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr11',2, {
      top: 210,
      left: 30,
      rotation: 48,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr12',2, {
      top: 210,
      left: 40,
      rotation: -30,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr13',2, {
      top: 210,
      left: 50,
      rotation: -67,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr14',2, {
      top: 210,
      left: 60,
      rotation: -84,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr15',2, {
      top: 210,
      left: 70,
      rotation: 70,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-ltr16',2, {
      top: 210,
      left: 80,
      rotation: 280,
      ease: Power2.easeOut
    },'myAdLtr-=.9')
    .to('#myad-txt1',1.3, {
      top: 210,
      ease: Power2.easeOut
    }, '-=.9')
    .from('#myad-marker',1.2, {
      top: -110,
      ease: Bounce.easeOut
    }, '-=.5')
    .from('#myad-shadow',1.2, {
      opacity: 0,
      ease: Bounce.easeOut
    }, '-=1.2')
    .from('#myad-txt3',1.2, {
      scale:.2,
      opacity: 0,
      ease: Power2.easeOut
    }, '-=.9')
    .from('#myad-surfboard',1.3, {
      top:260,
      rotation: -130,
      left: 300,
      ease: Back.easeOut
    }, '-=.9');

    // tl1.seek('cta')
    var tl2 = new TimelineMax({
      repeat:-1
    });
    tl2.to('#myad-clouds',30,{
      backgroundPositionX: 649,
      ease: Power0.easeOut
    })
  }
})();
