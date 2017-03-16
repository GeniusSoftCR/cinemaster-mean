(function () {
  'use strict';
  angular
  .module('appRoutes', ['ngRoute'])

  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/main/main.view.html',
        controller: 'mainCtrl',
        controllerAs: 'mainCtrl'
      }) 
      .when('/admin', {
        templateUrl: 'app/components/admin/admin.view.html',
        controller: 'adminCtrl',
        controllerAs: 'adminCtrl'
      })       
      .when('/peliculas/crear', {
        templateUrl: 'app/components/movies/movies.view.html',
        controller: 'moviesCtrl',
        controllerAs: 'peliculaCtrl'
      })
      .when('/actores/crear', {
        templateUrl: 'app/components/actors/actors.view.html',
        controller: 'actorCtrl',
        controllerAs: 'actorCtrl'
      })
    .otherwise({ redirectTo: '/'});

    $locationProvider.html5Mode({
      enabled: true,
      requiredBase: false
    });
    
  })
})();