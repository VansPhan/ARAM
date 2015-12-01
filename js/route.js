angular.module('ideas')
.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/templates/pages/main/index.html',
		controller: 'MainController'
	})
	.when('', {
		redirectTo: '/'
	})
	.otherwise( {redirectTo: '/' });
});