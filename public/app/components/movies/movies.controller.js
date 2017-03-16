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
    movieService.crear(movieCtrl.movieData).then(function(info){
      if(info.data.success) {
        movieCtrl.loading = false;
        //creamos success
        movieCtrl.successMsg = info.data.message;
        //Redirect
        // $timeout(function(){
        //   $location.path('/');
        // }, 2000);
        movieCtrl.movieData.name = null;
        movieCtrl.movieData.year = null;
        movieCtrl.movieData.genre = null;
        movieCtrl.movieData.image = null;
      } else {
        console.log(info);
        movieCtrl.loading = false;
        //create error message
        movieCtrl.errorMsg = info.data.message;
      }
    });
  };


}