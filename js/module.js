angular.module('LibraryApp.controllers', []);

angular.module('LibraryApp', [
  'LibraryApp.controllers',
  'ngRoute',
  'ngCookies'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
	  	.when("/users", 
		 	{
		  		templateUrl: "templates/Users.html", 
		  		controller: "UserController", 
		  		method:"getAll"
		  	})
	  	.when("/Users/new", 
	  		{
	  			templateUrl: "templates/create.html", 
	  			controller: "UserController"
	  		})
	  	.when('/Users/edit/:id', 
	  		{
	  			templateUrl: 'templates/create.html', 
	  			controller: "UserController", 
	  			method:"edit"
	  		})
	  	.otherwise(
	  		{
	  			redirectTo: '/Users'
	  		});
}]);