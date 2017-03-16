(function () {
  'use strict';
  angular
  .module('appRoutes', ['ui.router','oc.lazyLoad'])

  .config(function($stateProvider, $urlRouterProvider,$locationProvider){
    $stateProvider
      .state('main', {
        url:'/',
        resolve: {  
          load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load([
            'app/components/main/main.controller.js'
          ])}]
        },          
        templateUrl: 'app/components/main/main.view.html',
        controller: 'mainCtrl',
        controllerAs: 'ctrl'
      }) 
      .state('admin', {
        url:'/admin',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load([
            'app/components/admin/admin.controller.js'
          ])}]
        },   
        templateUrl: 'app/components/admin/admin.view.html'
      })
      .state('admin.peliculas', {
        url:'/admin/peliculas',
        views: {
            // the main template will be placed here (relatively named)
            '': { 
              templateUrl: 'app/components/movies/movies.view.html',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(
                  'app/components/movies/movies.directives.js'
                )}]
              }       
            },
            // the child views will be defined here (absolutely named)
            'main@peliculas': { 
              url:'/peliculas/principal',  
              templateUrl: 'app/components/movies/movies-main.view.html',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load([
                  'app/components/movies/movies.directives.js'
                ])}]
              }  
            },
            // for column two, we'll define a separate controller 
            'add@peliculas': { 
              url:'/peliculas/registrar',  
              templateUrl: 'app/components/movies/movies-add.view.html',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load([
                  'app/components/movies/movies.directives.js'
                ])}]
              }                
            }
        }    
         
      })



    //   .state('/actores/crear', {
    //     url:'/actores/crear',
    //     resolve: {
    //       load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load([
    //         'app/components/actors/actors.controller.js',
    //         'app/components/actors/actors.service.js'
    //       ])}]
    //     },          
    //     templateUrl: 'app/components/actors/actors.view.html',
    //     controller: 'actorCtrl',
    //     controllerAs: 'actorCtrl'
    // });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
  })
})();