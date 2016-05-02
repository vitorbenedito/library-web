angular.module('LibraryApp')
	.service('BookLoanService', function ($http, urls) {

		this.getAll = function(){
			return $http.get(urls.bookLoan);
		};

		this.create = function(bookLoan){
			return $http({
				    url: urls.bookLoan,
				    method: "POST",
				    data: JSON.stringify(bookLoan),
				    headers: {'Content-Type': 'application/json'}
			})
		};

		this.update = function(id, bookLoan){
			return $http({
				    url: urls.bookLoan + "/" + id,
				    method: "PUT",
				    data: JSON.stringify(bookLoan),
				    headers: {'Content-Type': 'application/json'}
			})
		};

		this.returnBook = function(id){
			return $http({
				    url: urls.bookLoan + "/" + id + "/return",
				    method: "PUT",
				    data: JSON.stringify({}),
				    headers: {'Content-Type': 'application/json'}
			})
		};

		this.get = function(id){
			return $http.get(urls.bookLoan + "/" + id);
		};

		this.delete = function(id){
			return $http.delete(urls.bookLoan + "/" + id);
		};

});