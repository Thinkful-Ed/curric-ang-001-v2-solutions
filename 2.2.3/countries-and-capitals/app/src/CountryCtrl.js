(function(){

'use strict';

angular.module('countriesAndCapitals')
  .controller('CountryCtrl', function(geonames, $routeParams, $q){
    var vm = this;
    vm.countryCode = $routeParams.countryCode;
    vm.country = {};
    geonames.country(vm.countryCode)
      .then(function(res){
        vm.country = res;
        return $q.all([
          geonames.neighbours(vm.country.geonameId),
          geonames.search(vm.country.capital)
        ]);
      })
      .then(function(res){
        vm.country.neighbours = res[0];
        vm.country.capitalInfo = res[1];
      });
  });

}());
