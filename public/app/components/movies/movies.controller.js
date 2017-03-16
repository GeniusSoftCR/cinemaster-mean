'use strict';
angular.module('cineApp').controller('moviesCtrl', movieController);

function movieController ($http, $location, $timeout, movieService, ImageService, Upload, $scope) {
  var movieCtrl = this;
  movieCtrl.cloudObj = ImageService.getConfiguration();
  function init() {
    var movies = movieService.obtener();
    movies.then(function(movieData){
      $scope.movies = movieData.data;
    })
  }
  init();

  movieCtrl.preSave = function(){
    movieCtrl.loading = true;
    movieCtrl.errorMsg = false;
    movieCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
    Upload.upload(movieCtrl.cloudObj)
      .success(function(data){
        movieCtrl.regMovie(data.url);
      });
  }
  movieCtrl.delete = function(index) {
    var elementToDelete = $scope.movies[index]._id;
    movieService.eliminar(elementToDelete).then(function(info){
      init();
    })
    // movieService.movieId.delete({id: $scope.moviesApi[index]._id}, function(data) {
    //   $scope.moviesApi.splice(index, 1);
    // });
  }
  movieCtrl.regMovie = function (pimage) {
    var newMovie ={
      name : movieCtrl.movieData.name,
      year : movieCtrl.movieData.year,
      genre : movieCtrl.movieData.genre,
      image: pimage
    }
    console.log(newMovie)
    //localhost:3000/api/peliculas/nueva
    movieService.crear(newMovie).then(function(info){
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
        init();
      } else {
        movieCtrl.loading = false;
        //create error message
        movieCtrl.errorMsg = info.data.message;
      }
    });
  };


}