(function(){
  'use strict';
  angular.module('cineApp').service('movieService', movieService);

  function movieService($http){

    this.crear = function (newMovie) {
      console.log(newMovie);
      return $http.post('/api/movies/new', newMovie);
    };
    this.obtener = function() {
      return $http.get('/api/movies');
    };
  }

})();
