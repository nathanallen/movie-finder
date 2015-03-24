'use strict';

angular
  .module('movieFinderApp', [
    'ngResource',
    'ngRoute',
    'ui.autocomplete'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });