(function(){
  'use strict';
  angular.module('cineApp').service('actorService', actorService);

  function actorService($http){

    this.crear = function (newActor) {
      return $http.post('/api/actor/new', newActor);
    };
    this.obtener = function() {
      return $http.get('/api/actor');
    };
  }

})();
