'use strict';
angular.module('appRoutes', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/peliculas/crear', {
    templateUrl: 'app/components/movies/movies.view.html',
    controller: 'moviesCtrl',
    controllerAs: 'peliculaCtrl'
  })
  $routeProvider.when('/actors/consult', {
    templateUrl: 'app/components/actors/consult/consult.view.html',
    controller: 'consultCtrl',
    controllerAs: 'consultCtrl'
  })
  $routeProvider.when('/actors/modify', {
    templateUrl: 'app/components/actors/modify/modify.view.html',
    controller: 'modifyCtrl',
    controllerAs: 'modifyCtrl'
  })
  .otherwise({ redirectTo: '/'});

  $locationProvider.html5Mode({
    enabled: true,
    requiredBase: false
  });
})