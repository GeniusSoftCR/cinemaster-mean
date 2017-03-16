/*Actores Service*/
(function(){
  'use strict';
  angular.module('cineApp').service('actorsService', actorsService);

  function actorsService($http){

    this.create = function (newActor) {
      return $http.post('/api/actors/new', newActor);
    };
    this.fetch = function() {
      return $http.get('/api/actors');
    };
    this.update = function(knownActor) {
      //return $http.post('/api/actores/update', knownActor);??
    };
  }

})();
