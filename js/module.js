angular.module('LibraryApp', [
  'ngRoute',
  'ngCookies',
  'ui.bootstrap'
])
.constant('DEFAULT_DOMAIN','http://library.sa-east-1.elasticbeanstalk.com')
.constant('USERS_API','/api/users')
.constant('BOOKS_API','/api/books')
.constant('BOOKLOAN_API','/api/bookloans')
.service('urls',function(DEFAULT_DOMAIN, USERS_API, BOOKS_API, BOOKLOAN_API){ 
	this.users = DEFAULT_DOMAIN + USERS_API;
	this.books = DEFAULT_DOMAIN + BOOKS_API;
	this.bookLoan = DEFAULT_DOMAIN + BOOKLOAN_API;
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
	  	.when("/books/loan/:id", 
	  		{
	  			templateUrl: "templates/book/loan.html", 
	  			controller: "BookLoanController"
	  		})
	  	.otherwise(
	  		{
	  			redirectTo: '/users'
	  		});
}]);