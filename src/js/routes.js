'use strict';
/**
 * Route configuration for the SampleApp module.
 */
angular.module('AbhiSampleProject').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// For unmatched routes
		$urlRouterProvider.otherwise('/');
		// Application routes
		$stateProvider.state('index', {
			url: '/',
			templateUrl: 'templates/dashboard.html',
			controller: 'AlertsCtrl'
		}).state('tables', {
			url: '/tables',
			templateUrl: 'templates/tables.html',
			controller: 'TableCtrl'
		});
	}
]);