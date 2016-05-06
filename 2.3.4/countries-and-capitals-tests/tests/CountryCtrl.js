describe('Controller: CountryCtrl', function(){

  var _vm, _q, _geonames, _routeParams;

  beforeEach(module('countriesAndCapitals'));
  beforeEach(inject(function($controller, $injector){
    _q = $injector.get('$q');
    _geonames = $injector.get('geonames');
    _routeParams = $injector.get('$routeParams');

    _routeParams.countryCode = 'PK';
      spyOn(_geonames, 'country').and.callThrough();
    spyOn(_geonames, 'neighbours').and.callThrough();
    spyOn(_geonames, 'search').and.callThrough();

    vm = $controller('CountryCtrl', {
      $q: _q,
      $routeParams: _routeParams,
      geonames: _geonames
    });
  }));

  it('should initialize countryCode and country', function(){
    expect(vm.country).toEqual({});
    expect(vm.countryCode).toBe(_routeParams.countryCode);
  });

  it('should call geonames.country, geonames.neighbours and geonames.search', function(){
    expect(_geonames.country).toHaveBeenCalledWith(vm.countryCode);
  });
});
