/*Actores*/
'use strict';
angular.module('cineApp').controller('actorsCtrl', actorController);

function actorController ($http, $location, $timeout, actorsService, ImageService, Upload) {
  var actorsCtrl = this;

  actorsCtrl.actores = actorsService.obtener();
  function init() {
    //load actors
  }

  this.traerActores = function() {
    actorsCtrl.actores = actorsService.obtener();
  };

  this.registrarActor = function () {
    actorsCtrl.loading = true;
    actorsCtrl.errorMsg = false;
    //localhost:3000/api/peliculas/crear
    //1ro: invoca la función de crear nuevo actor
    //2do: si el resultado es "positivo" muestra mensanje de exito y limpia el formulario
    //3ro: si el resultado es "negativo" muestra mensaje de fracaso
    actorsService.crear(actorsCtrl.actorData).then(function(info){
      if(info.data.success) {
        actorsCtrl.loading = false;
        //creamos success
        actorsCtrl.successMsg = info.data.message;
        actorsCtrl.actorData.nombre = null;
        actorsCtrl.actorData.ape1 = null;
        actorsCtrl.actorData.ape2 = null;
        actorsCtrl.actorData.premios = null;
        actorsCtrl.actorData.fechaNac = null;
        actorsCtrl.actorData.image = null;
      } else {
        console.log(info);
        actorsCtrl.loading = false;
        //create error message
        actorsCtrl.errorMsg = info.data.message;
      }
    });
  };

  this.consultarActor = function () {
    //primero se cargan los actores persistidos en el modelo
    traerActores();
  };

  this.modificarActor = function () {
    //debe venir el actualizar del service
  };
  
}