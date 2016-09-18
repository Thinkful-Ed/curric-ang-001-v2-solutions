(function(){
	'use strict';
	angular.module('app', ['firebase'])
		.controller('AppCtrl', function($firebaseObject){
			var vm = this;
			var ref = firebase.database().ref();
			vm.data = $firebaseObject(ref);
		});
}());
