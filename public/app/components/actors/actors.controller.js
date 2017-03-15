'use strict';
angular.module('cineApp').controller('actorCtrl', actorController);

function actorController ($http, $location, $timeout, actorService, ImageService, Upload) {
  var actorCtrl = this;

  actorCtrl.cloudObj = ImageService.getConfiguration();

  function init() {
  }

  this.preSave = function(){
        actorCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(actorCtrl.cloudObj)
          .success(function(data){
            actorCtrl.save(data.url);
          });
      }

  this.save = function (pUrl) {
    console.log(pUrl);

    var newActor ={
          name : actorCtrl.name,
          lastName : actorCtrl.lastName,
          birthday : actorCtrl.birthday,
          awards : actorCtrl.awards,
          image: pUrl
        }

    actorCtrl.loading = true;
    actorCtrl.errorMsg = false;
    //localhost:3000/api/peliculas/nueva
    actorService.crear(newActor)

    .then(function(info){
      if(info.data.success) {
        actorCtrl.loading = false;
        //creamos success
        actorCtrl.successMsg = info.data.message;
        //Redirect
        // $timeout(function(){
        //   $location.path('/');
        // }, 2000);
        actorCtrl.actorData.name = null;
        actorCtrl.actorData.lastName = null;
        actorCtrl.actorData.birthday = null;
        actorCtrl.actorData.awards = null;
        actorCtrl.actorData.image = null;
      } else {
        console.log(info);
        actorCtrl.loading = false;
        //create error message
        actorCtrl.errorMsg = info.data.message;
      }
    });
  }
}