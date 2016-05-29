angular.module("MyApp", ['appRoutes', 'authService', 'mainCtrl','userCtrl', 'userService', 'storyService', 'storyCtrl', 'reverseList'])

.config(function($httpProvider){
	$httpProvider.interceptors.push('AuthInterceptor');
});
