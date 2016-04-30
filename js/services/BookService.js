angular.module('LibraryApp.services', [])
	.service('BookService', function ($http, urls) {

		this.getAll = function(){
			return $http.get(urls.books);
		};

		this.create = function(book){
			return $http({
				    url: urls.books,
				    method: "POST",
				    data: JSON.stringify(book),
				    headers: {'Content-Type': 'application/json'}
			})
		};

		this.update = function(id, book){
			return $http({
				    url: urls.books + "/" + id,
				    method: "PUT",
				    data: JSON.stringify(book),
				    headers: {'Content-Type': 'application/json'}
			})
		};

		this.get = function(id){
			return $http.get(urls.books + "/" + id);
		};

		this.delete = function(id){
			return $http.delete(urls.books + "/" + id);
		};

});