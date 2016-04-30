angular.module('LibraryApp', [
  'LibraryApp.controllers',
  'LibraryApp.services',
  'ngRoute',
  'ngCookies'
])
.constant('DEFAULT_DOMAIN','http://localhost:8080')
.constant('USERS_API','/api/users')
.constant('BOOKS_API','/api/books')
.service('urls',function(DEFAULT_DOMAIN, USERS_API, BOOKS_API){ 
	this.users = DEFAULT_DOMAIN + USERS_API;
	this.books = DEFAULT_DOMAIN + BOOKS_API;
})
.config(['$routeProvider', function($routeProvider) {

  $routeProvider
	  	.when("/users", 
		 	{
		  		templateUrl: "templates/user/list.html", 
		  		controller: "UserController", 
		  		method:"getAll"
		  	})
	  	.when("/users/new", 
	  		{
	  			templateUrl: "templates/user/form.html", 
	  			controller: "UserController"
	  		})
	  	.when('/users/edit/:id', 
	  		{
	  			templateUrl: 'templates/user/form.html', 
	  			controller: "UserController", 
	  			method:"edit"
	  		})
	  	.when("/books", 
		 	{
		  		templateUrl: "templates/book/list.html", 
		  		controller: "BookController", 
		  		method:"getAll"
		  	})
	  	.when("/books/new", 
	  		{
	  			templateUrl: "templates/book/form.html", 
	  			controller: "BookController"
	  		})
	  	.when('/books/edit/:id', 
	  		{
	  			templateUrl: 'templates/book/form.html', 
	  			controller: "BookController", 
	  			method:"edit"
	  		})
	  	.otherwise(
	  		{
	  			redirectTo: '/users'
	  		});
}]);