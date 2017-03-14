'use strict';
angular.module('cineApp').controller('moviesCtrl', movieController);

function movieController ($http, $location, $timeout, movieService, ImageService, Upload) {
  var movieCtrl = this;

  function init() {
    //show movies
  }

  this.regMovie = function (movieData) {
    movieCtrl.loading = true;
    movieCtrl.errorMsg = false;
    //localhost:3000/api/peliculas/nueva
    movieService.crear(movieCtrl.movieData).then(function(data){
      if(data.data.success) {
        movieCtrl.loading = false;
        //creamos success
        movieCtrl.successMsg = data.data.message;
        //Redirect
        // $timeout(function(){
        //   $location.path('/');
        // }, 2000);
        movieCtrl.movieData.name = null;
        movieCtrl.movieData.year = null;
        movieCtrl.movieData.genre = null;
        movieCtrl.movieData.image = null;
      } else {
        movieCtrl.loading = false;
        //create error message
        movieCtrl.errorMsg = data.data.message;
      }
    });
  };


}