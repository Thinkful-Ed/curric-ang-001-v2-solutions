'use strict';

describe('Factory: geonames', function(){
  var _geonames;

  beforeEach(module('countriesAndCapitals'));
  beforeEach(inject(function($injector){
      _geonames = $injector.get('geonames');
  }));

  describe('countries', function(){

  });
});
