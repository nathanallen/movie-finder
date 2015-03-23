angular.module('movieFinderApp')
  .controller('MainCtrl', function ($scope, $location, omdbApiService) {

    $scope.awesomeMovies = [
      'Looper',
      'Hackers',
      'The Internet\'s Own Boy'
    ];

    $scope.search = function(title) {
      omdbApiService.getMovieByTitle(title).
        then(
          function(movieData) {
            $location.url('/movie/' + movieData['imdbID'])
          },
          function() {
            alert('Nothing found')
          }
        );
    }

  });
