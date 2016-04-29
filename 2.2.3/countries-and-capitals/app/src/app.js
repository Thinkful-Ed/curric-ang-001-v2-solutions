'use strict'

angular.module('countriesAndCapitals', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'src/home.html'
      })
      .when('/countries', {
        templateUrl: 'src/countries.html',
        controller: 'CountriesCtrl',
        controllerAs: 'vm'
      })
      .when('/countries/:countryCode', {
        templateUrl: 'src/country.html',
        controller: 'CountryCtrl',
        controllerAs: 'vm'
      });
    });
