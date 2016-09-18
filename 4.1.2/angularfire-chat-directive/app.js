(function(){
	'use strict';
	angular.module('app', ['firebase'])
		.directive('chat', function() {
	        return {
	            restrict: 'E',
	            templateUrl: 'chat.tmpl.html',
	            scope: {},
	            controllerAs: 'vm',
	            controller: function($firebaseArray){
			var vm = this;
			var ref = firebase.database().ref('messages');
	                vm.messages = $firebaseArray(ref);

	                vm.sendMessage = function(send){
	                    // do some validation
	                    if ( !send.message ) return false;
	                    // save the message
	                    vm.messages.$add({
	                        message: send.message.trim(),
	                        userName: send.userName,
	                        datetime: Date.now()
	                    });
	                    vm.send.message = '';
	                };
	            }
	        };
	    });
}());
