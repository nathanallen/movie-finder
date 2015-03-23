angular.module('movieFinderApp')
  .factory('omdbApiService', function ($resource, $q) {

    var service = {},
        omdb_api_endpoint = "http://www.omdbapi.com/";

    var Movie = $resource(
                            omdb_api_endpoint,
                            {i:"", t:"", r:"json" },
                            {get: {method: "GET", cache: true} }
                         )

    var movies = {
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
        "tt0113243": {
          "Title": "Hackers",
          "Year": "1995",
          "Rated": "PG-13",
          "Released": "1995-09-15",
          "Runtime": "107 min",
          "Genre": "Comedy, Crime, Drama",
          "Director": "Iain Softley",
          "Writer": "Rafael Moreu",
          "Actors": "Jonny Lee Miller, Angelina Jolie, Jesse Bradford, Matthew Lillard",
          "Plot": "A young boy is arrested by the U.S. Secret Service for writing a computer virus and is banned from using a computer until his 18th birthday. Years later, he and his new-found friends ...",
          "Language": "English, Italian, Japanese, Russian",
          "Country": "USA",
          "Awards": "N/A",
          "Poster": "http://ia.media-imdb.com/images/M/MV5BODg0NjQ5ODQ3OF5BMl5BanBnXkFtZTcwNjU4MjkzNA@@._V1_SX300.jpg",
          "Metascore": "46",
          "imdbRating": "6.2",
          "imdbVotes": "48,945",
          "imdbID": "tt0113243",
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
        }
    };

    function addMovie(data){
      movies[data['imdbID']] = data;
    }

    service.fetch = function(n) {
      var n = n || -1;
      return _.values(movies).slice(0,n);
    }

    service.getMovieByTitle = function(title) {
      var movie = Movie.get({t: title})

      movie.$promise.then(
        function(movieData){
          addMovie(movieData)
        },
        function(){
        }
      );

      return movie.$promise;
    };

    service.getMovieById = function(id) {
      var movie = Movie.get({i: id})

      movie.$promise.then(
        function(movieData){
          addMovie(movieData)
        },
        function(rejection){
        }
      );

      return movie.$promise;
    };

    return service;

  });