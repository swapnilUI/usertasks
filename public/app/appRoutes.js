angular.module('appRoutes', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

		$routeProvider

		.when('/', {
			templateUrl:'app/views/pages/home.html',
			controller: "MainController",
			controllerAs: "main"
		})
		.when('/login', {
			templateUrl:'app/views/pages/login.html'
		})
		.when('/signup', {
			templateUrl:'app/views/pages/signup.html'
		})
		.when('/allstories', {
			templateUrl:'app/views/pages/allstories.html',
			controller:"AllStoriesController",
			controllerAs:"story",
			resolve:{
				stories:function(Story){
					return Story.allStories();
				}
			}
		});

		$locationProvider.html5Mode(true);
}]);
