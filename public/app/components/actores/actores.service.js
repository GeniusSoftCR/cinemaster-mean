/*Actores Service*/
(function(){
  'use strict';
  angular.module('cineApp').service('actoresService', actoresService);

  function actoresService($http){

    this.crear = function (newActor) {
      return $http.post('/api/actores/new', newActor);
    };
    this.obtener = function() {
      return $http.get('/api/actores');
    };
  }

})();
