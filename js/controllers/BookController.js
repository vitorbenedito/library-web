angular.module('LibraryApp')
    .controller('BookController', function ($scope,$http,$location,$route,$routeParams, BookService, UserService) {

    	$scope.init = function(){

    		if ($route.current.method !== undefined) {
           		$scope[$route.current.method]();
         	}

    	};

        $scope.getAll = function(){

            $scope.data = BookService.getAll().success(function(response){
                $scope.books = response;
            });
        };

        $scope.createBook = function(){
        	$scope.book = {};
        	$location.path('/books/new');
        };

        $scope.loan = function(book){
            $location.path('/books/loan/' + book.id);
        };

        $scope.editBook = function(book){
        	$location.path('/books/edit/' + book.id);
        };

        $scope.back = function(){
        	$location.path('/books');
        };

        $scope.clear = function(){
        	$scope.book = {};
        };

        $scope.remove = function(book){

        	BookService.delete(book.id)
        	    .success(function(data) {
        	   	  $scope.getAll();
        	    })
        	    .error(function(data, status) {
        	        
        	    });
        };

        $scope.edit  = function(){
        	BookService.get($routeParams.id)
        	    .success(function(data) {
        	   	  $scope.book = data;
        	    })
        	    .error(function(data, status) {
        	        
        	    });
        };

        $scope.save = function(){

        	if($scope.book.id != null){

                BookService.update($scope.book.id, $scope.book)
                    .success(function(data) {
                      $scope.back();
                    })
                    .error(function(data, status) {
                        
                    });
        		
        	}else{

                BookService.create($scope.book)
                    .success(function(data) {
                      $scope.back();
                    })
                    .error(function(data, status) {
                        
                    });

            }
    	    
        };

        $scope.init();

});