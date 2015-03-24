angular.module('movieFinderApp')
  .factory('omdbApiService', function ($resource, $cacheFactory) {

    var service = {},
        omdb_api_endpoint = "http://www.omdbapi.com/",
        default_params = {i:"", t:"", r:"json"},
        Movie = $resource(
                            omdb_api_endpoint,
                            default_params,
                            {
                              query: {method: "GET", cache: true}
                            }
                         );

    service.getMovieByTitle = function(title) {
      return Movie.query({t: title})
    };

    service.getMovieById = function(id) {
      return Movie.query({i: id})
    };

    return service;

  });