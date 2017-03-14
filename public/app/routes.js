'use strict';
angular.module('appRoutes', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/peliculas/crear', {
    templateUrl: 'app/components/movies/movies.view.html',
    controller: 'moviesCtrl',
    controllerAs: 'peliculaCtrl'
  })
  $routeProvider.when('/actores/crear', {
    templateUrl: 'app/components/actores/actores.view.html',
    controller: 'actoresCtrl',
    controllerAs: 'actoresCtrl'
  })
  $routeProvider.when('/actores/consultar', {
    templateUrl: 'app/components/actores/actores.consultar.view.html',
    controller: 'actoresCtrl',
    controllerAs: 'actoresCtrl'
  })
  $routeProvider.when('/actores/modificar', {
    templateUrl: 'app/components/actores/actores.modificar.view.html',
    controller: 'actoresCtrl',
    controllerAs: 'actoresCtrl'
  })
  .otherwise({ redirectTo: '/'});

  $locationProvider.html5Mode({
    enabled: true,
    requiredBase: false
  });
})