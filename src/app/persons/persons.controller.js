(function() {
  'use strict';

  angular
    .module('person')
    .controller('PersonController', PersonController);

  /** @ngInject */
  function PersonController($stateParams) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.show = true;
    vm.sort = '+name';
    vm.currentPerson = {};
    console.log(angular.element('icon-static'))
    vm.list = [
      {
        name:'Oleh',
        age: 23 ,
        img:'http://gdpit.com/avatars_pictures/animals/gdpit_com_96080809_2.jpg',
        images:[
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100'
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur dolores, nam a officia molestias numquam praesentium enim veritatis natus, sit, aut aperiam, odio possimus animi distinctio sunt mollitia voluptatem!',
        id:1,
        marker: {
          id: 0,
          coords: {
            latitude: 49.802981,
            longitude: 24.011145
          },
          options: { draggable: true },
          show: false
        },
        map: {
          center: {
            latitude: 49.802981,
            longitude: 24.011145
          },
          zoom: 16
        }
      },
      {
        name:'Bohdan',
        age: 23 ,
        img:'http://gdpit.com/avatars_pictures/animals/gdpit_com_96080809_2.jpg',
        images:[
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100'
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur dolores, nam a officia molestias numquam praesentium enim veritatis natus, sit, aut aperiam, odio possimus animi distinctio sunt mollitia voluptatem!',
        id:2,
        marker: {
          id: 0,
          coords: {
            latitude: 49.802981,
            longitude: 24.011145
          },
          options: { draggable: true },
          show: false
        },
        map: {
          center: {
            latitude: 49.802981,
            longitude: 24.011145
          },
          zoom: 16
        }
      },
      {
        name:'Tom',
        age: 23 ,
        img:'http://gdpit.com/avatars_pictures/animals/gdpit_com_96080809_2.jpg',
        images:[
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100'
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur dolores, nam a officia molestias numquam praesentium enim veritatis natus, sit, aut aperiam, odio possimus animi distinctio sunt mollitia voluptatem!',
        id:3,
        marker: {
          id: 0,
          coords: {
            latitude: 49.802981,
            longitude: 24.011145
          },
          options: { draggable: true },
          show: false
        },
        map: {
          center: {
            latitude: 49.802981,
            longitude: 24.011145
          },
          zoom: 16
        }
      },
      {
        name:'Ihor',
        age: 23 ,
        img:'http://gdpit.com/avatars_pictures/animals/gdpit_com_96080809_2.jpg',
        images:[
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100',
          'http://placehold.it/100x100'
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur dolores, nam a officia molestias numquam praesentium enim veritatis natus, sit, aut aperiam, odio possimus animi distinctio sunt mollitia voluptatem!',
        id:4,
        marker: {
          id: 0,
          coords: {
            latitude: 49.802981,
            longitude: 24.011145
          },
          options: { draggable: true },
          show: false
        },
        map: {
          center: {
            latitude: 49.802981,
            longitude: 24.011145
          },
          zoom: 16
        }
      }
    ];

    for (var i = 0; i < vm.list.length; i++) {
      if (vm.list[i].id == $stateParams.id ) {
        vm.currentPerson = vm.list[i];
      }
    }

    vm.addPerson = function () {
      vm.person  = {name: vm.name, age: vm.age};
      vm.list.push(vm.person);
      vm.name = "";
      vm.age = "";
    }

    vm.delete = function (i) {
      var index = vm.list.indexOf(i);
      vm.list.splice(index,1);
    }

    vm.sortOrder = function () {
      if (vm.sort == '+name') {
        vm.sort = '-name'
      } else {
        vm.sort = '+name'
      }
      return vm.sort
    }
    vm.options = {
      index: 3,
      escKey: false,
      timeToIdle: 4000
    };

    vm.text = "Hide";
    vm.variable = false;
    vm.toogle = function () {
      vm.variable = !vm.variable;
      vm.variable ? vm.text = "Show" : vm.text = "Hide";
    }
  }
})();
