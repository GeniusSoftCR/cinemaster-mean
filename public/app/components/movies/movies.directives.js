(function() {
 'use strict';
 angular.module('cineApp',['oc.lazyLoad'])

 .directive('movieAddDirective', [function () {
 	return {
 		restrict: 'E',	
		resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load('app/components/movies/movies.controller.js')}],
          load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load('app/components/movies/movies.service.js')}],
        },   			
        templateUrl: 'app/components/actors/actors.view.html',
        controller: 'moviesCtrl',
        controllerAs: 'moviesCtrl'
 	};
 }])
})();
