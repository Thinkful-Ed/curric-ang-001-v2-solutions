(function(angular){

'use strict';

angular.module('countriesAndCapitals')
  .factory('geonames', function($http, $q){

    var baseUrl = 'http://api.geonames.org';
    var username = 'mohuk';

    return {
      countries: countries,
      neighbours: neighbours,
      search: search,
      country: country
    };

    function countries(){
      var config = {
        params: {
          username: username
        },
        cache: true
      };

      return $http.get(baseUrl + '/countryInfoJSON', config)
        .then(function(res){
          return $q.when(res.data.geonames);
        });
    }

    function neighbours(geonameId){
      var config = {
        params: {
          username: username,
          geonameId: geonameId
        }
      };

      return $http.get(baseUrl + '/neighboursJSON', config)
        .then(function(res){
          return $q.when(res.data.geonames.splice(0, 3));
        });
    }

    function search(query){
      var config = {
        params: {
          username: username,
          q: query
        }
      };

      return $http.get(baseUrl + '/searchJSON', config)
        .then(function(res){
          return $q.when(res.data.geonames[0]);
        });
    }

    function country(countryCode){
      var config = {
        params: {
          username: username,
          country: countryCode
        }
      };

      return $http.get(baseUrl + '/countryInfoJSON', config)
        .then(function(res){
          return $q.when(res.data.geonames[0]);
        });
    }

  });

}(window.angular));
