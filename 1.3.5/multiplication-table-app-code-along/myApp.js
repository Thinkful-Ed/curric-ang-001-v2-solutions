angular.module('myApp', []).controller('MultiplicationCtrl', function($attrs) {
    var vm = this;
    vm.numberLimit = $attrs.initialNumberLimit || 10;

    vm.numbers = function() {
        var numbers = [];
        for(var i=0; i < vm.numberLimit; i++) {
            numbers[i] = i + 1;
        }
        return numbers;
    };

    vm.compute = function(a,b) {
        return a * b;
    };
});