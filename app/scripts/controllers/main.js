angular.module('movieFinderApp')
  .controller('MainCtrl', function ($scope, OmdbApiService) {
    $scope.awesomeMovies = [
      'Looper',
      'Hackers',
      'The Internet\'s Own Boy'
    ];
  });