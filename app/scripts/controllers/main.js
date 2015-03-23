angular.module('movieFinderApp')
  .controller('MainCtrl', function ($scope, $location, omdbApiService) {

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

    $scope.awesomeMovies = omdbApiService.fetch(3)

  });
