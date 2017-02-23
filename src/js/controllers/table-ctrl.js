'use strict';
angular.module('AbhiSampleProject').controller('TableCtrl', function($scope, sampleService) {
	 $scope.hitAlert = function() {
	    	sampleService.fetchTansuctionsDetails().then(function(transDetails) {
	           alert(true);
	        }, function(err) {
	        	alert(err);
	        });
	    };  
})