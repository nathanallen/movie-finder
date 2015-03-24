angular.module('movieFinderApp')
  .controller('MainCtrl', function ($scope, $location, omdbApiService) {

    $scope.autocomplete_suggestions = [];
    $scope.search_results = {};

    $scope.search = function(title) {
      $scope.errors = false;

      if (title.length < 4) {
        $scope.autocomplete_suggestions = [];
        $scope.search_results = {};
        return $scope.autocomplete_suggestions;
      }

      return omdbApiService.getMovieByTitle(title).$promise.then(
          function(movieData) {
            if (movieData['imdbID'] === undefined) {
              $scope.errors = true;
              return $scope.autocomplete_suggestions;
            }
            if ($scope.search_results[movieData['Title']] === undefined) {
              $scope.search_results[movieData['Title']] = movieData;
              $scope.autocomplete_suggestions.unshift(movieData);
            } 
            return $scope.autocomplete_suggestions;
          },
          function() {
            alert('Nothing found')
          } 
        );
    };
    
    $scope.autocomplete = _.debounce($scope.search, 300);

    $scope.goTo = function(movieData){
      $scope.autocomplete_suggestions = [];
      $scope.search_results = {};
      $scope.errors = false;
      $location.url('/movie/' + movieData['imdbID']);
    };

    $scope.goToSearchResult = function (title) {
      var movie = omdbApiService.getMovieByTitle(title);
      movie.$promise.then(
        function(movieData){
          if (movieData['imdbID'] === undefined) { return false; }
          $scope.goTo(movieData);
        }
      );
    }

    // TEMP STUBBED MOVIE DATA

    var stubbed_movies = {
        "tt1276104": {
          "Title": "Looper",
          "Year": "2012",
          "Rated": "R",
          "Released": "2012-09-28",
          "Runtime": "119 min",
          "Genre": "Action, Crime, Sci-Fi",
          "Director": "Rian Johnson",
          "Writer": "Rian Johnson",
          "Actors": "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
          "Plot": "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
          "Language": "English, French",
          "Country": "USA, China",
          "Awards": "14 wins & 35 nominations.",
          "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg",
          "Metascore": "84",
          "imdbRating": "7.5",
          "imdbVotes": "364,154",
          "imdbID": "tt1276104",
          "Type": "movie",
          "Response": "True"
        },
        "tt3268458": {
            "Title": "The Internet's Own Boy: The Story of Aaron Swartz",
            "Year": "2014",
            "Rated": "N/A",
            "Released": "2014-06-27",
            "Runtime": "105 min",
            "Genre": "Documentary, Biography, Crime",
            "Director": "Brian Knappenberger",
            "Writer": "Brian Knappenberger",
            "Actors": "Tim Berners-Lee, Cindy Cohn, Gabriella Coleman, Cory Doctorow",
            "Plot": "The story of programming prodigy and information activist Aaron Swartz, who took his own life at the age of 26.",
            "Language": "English",
            "Country": "USA",
            "Awards": "3 wins & 1 nomination.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjgwOTgwNjQ5MV5BMl5BanBnXkFtZTgwMzk1NTQ2MTE@._V1_SX300.jpg",
            "Metascore": "72",
            "imdbRating": "8.2",
            "imdbVotes": "4,149",
            "imdbID": "tt3268458",
            "Type": "movie",
            "Response": "True"
        },
        "tt1285016": {
          "Title": "The Social Network",
          "Year": "2010",
          "Rated": "PG-13",
          "Released": "2010-10-01",
          "Runtime": "120 min",
          "Genre": "Biography, Drama",
          "Director": "David Fincher",
          "Writer": "Aaron Sorkin (screenplay), Ben Mezrich (book)",
          "Actors": "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
          "Plot": "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the cofounder who was later squeezed out of the business.",
          "Language": "English, French",
          "Country": "USA",
          "Awards": "Won 3 Oscars. Another 160 wins & 122 nominations.",
          "Poster": "http://ia.media-imdb.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg",
          "Metascore": "95",
          "imdbRating": "7.8",
          "imdbVotes": "391,202",
          "imdbID": "tt1285016",
          "Type": "movie",
          "Response": "True"
        }
    };

    $scope.awesomeMovies = stubbed_movies;


  });
