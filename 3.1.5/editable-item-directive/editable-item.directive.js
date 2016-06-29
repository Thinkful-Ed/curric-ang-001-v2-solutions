'use strict';

angular.module('app', [])
	.directive('makeEditable', function($timeout){
		return {
			restrict: 'A',
			transclude: true,
			templateUrl: 'editable-item.html'
		};
	});