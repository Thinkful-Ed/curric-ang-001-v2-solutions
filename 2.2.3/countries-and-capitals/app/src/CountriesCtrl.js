(function(angular){

'use strict';

angular.module('countriesAndCapitals')
  .controller('CountriesCtrl', function(geonames){
    var vm = this;

    geonames.countries()
      .then(function(res){
        vm.countries = res;
      });
  });

}(window.angular));

