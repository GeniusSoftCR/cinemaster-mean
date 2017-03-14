'use strict';
angular.module('cineApp').controller('actorCtrl', actorController);

function actorController ($http, $location, $timeout, actorService, ImageService, Upload) {
  var actorCtrl = this;

  function init() {
  }

  this.regActor = function (actorData) {
    actorCtrl.loading = true;
    actorCtrl.errorMsg = false;
    //localhost:3000/api/peliculas/nueva
    actorService.crear(actorData)

    .then(function(info){
      if(info.data.success) {
        actorCtrl.loading = false;
        //creamos success
        actorCtrl.successMsg = info.data.message;
        //Redirect
        // $timeout(function(){
        //   $location.path('/');
        // }, 2000);
        actorData.name = null;
        actorData.year = null;
        actorData.genre = null;
        actorData.image = null;
      } else {
        console.log(info);
        actorCtrl.loading = false;
        //create error message
        actorCtrl.errorMsg = info.data.message;
      }
    });
  }
}