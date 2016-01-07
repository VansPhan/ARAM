angular.module('aram')
.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/templates/home/index.html',
		controller: 'homeController'
	})
	.when('', {
		redirectTo: '/'
	})
	.otherwise( {redirectTo: '/' });
});