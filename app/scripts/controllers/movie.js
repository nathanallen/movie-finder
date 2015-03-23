angular.module('movieFinderApp')
  .controller('MovieCtrl', function ($scope, $routeParams, omdbApiService) {

    $scope.movie = omdbApiService.getMovieById($routeParams.id);

  });
