angular.module('movieFinderApp')
  .controller('MainCtrl', function ($scope, $location, omdbApiService) {

    $scope.awesomeMovies = omdbApiService.fetch(3);

    $scope.search = function(title) {
      omdbApiService.getMovieByTitle(title).
        $promise.then(
          function(movieData) {
            $location.url('/movie/' + movieData['imdbID'])
          },
          function() {
            alert('Nothing found')
          }
        );
    };

  });
