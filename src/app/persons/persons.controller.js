(function() {
  'use strict';

  angular
    .module('person')
    .controller('PersonCtrl', PersonCtrl);

  /** @ngInject */
  function PersonCtrl($stateParams) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.sort = '+name';
    vm.currentPerson = {};
    vm.list = [
      {name:'Oleh',age: 23 ,img:'http://gdpit.com/avatars_pictures/animals/gdpit_com_96080809_2.jpg', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur dolores, nam a officia molestias numquam praesentium enim veritatis natus, sit, aut aperiam, odio possimus animi distinctio sunt mollitia voluptatem!' ,id:1},
      {name:'Ihor',age: 54 ,img:'http://gdpit.com/avatars_pictures/animals/gdpit_com_96080809_3.jpg', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nesciunt vel ullam tempora consectetur in nostrum fugit mollitia, repudiandae fugiat recusandae, animi officia vero corporis nam. Fugit, excepturi architecto doloremque.' ,id:2},
      {name:'Bohdan',age: 24 ,img:'http://gdpit.com/avatars_pictures/animals/gdpit_com_96080809_5.gif', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, unde quis accusamus illum asperiores eveniet quas recusandae quae labore architecto. Eveniet explicabo consequatur culpa libero nisi nam laboriosam quis distinctio.' ,id:3},
      {name:'Tom',age: 21 ,img:'http://gdpit.com/avatars_pictures/animals/gdpit_com_96080809_8.jpg', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dignissimos explicabo sint iste fugiat expedita ab consequatur maiores aspernatur placeat, beatae delectus illo quibusdam? Doloremque nemo debitis consectetur nisi blanditiis!' ,id:4}
    ];
    vm.images = [{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},
      {'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},
      {'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},
      {'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'},{'url':'http://placehold.it/100x100','caption':'Some foto'}]

    for (var i = 0; i < vm.list.length; i++) {
      if (vm.list[i].id == $stateParams.id ) {
        vm.currentPerson = vm.list[i];
      }
    };

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

    vm.text = "Show"
    vm.variable = false;
    vm.toogle = function () {
      vm.variable = !vm.variable;
      vm.variable ? vm.text = "Hide" : vm.text = "Show"
    }
  }
})();
