(function(angular){

'use strict';

angular.module('countriesAndCapitals')
  .factory('geonames', function($http, $q){

    var baseUrl = 'http://api.geonames.org';
    var username = 'mohuk';
    var baseConfig = {
        params: {
          username: username
        }
    };

    return {
      countries: countries,
      neighbours: neighbours
    };

    function countries(){
      return $http.get(baseUrl + '/countryInfoJSON', baseConfig)
        .then(function(res){
          return $q.when(res.data.geonames);
        });
    }

    function neighbours(id){
      var config = angular.extend({}, baseConfig);
      config.params.geonameId = id;

      return $http.get(baseUrl + '/neighboursJSON', config)
        .then(function(res){
          return $q.when(res.data);
        });
    }

    function search(){
      var config = angular.extend({}, baseConfig);
      config.params;

      return $http.get(baseUrl + '/search', config)
        .then(function(res){
          return $q.when(res.data);
        });
    }

  });

}(window.angular));
