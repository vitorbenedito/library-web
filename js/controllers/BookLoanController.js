angular.module('LibraryApp')
    .controller('BookLoanController', function ($scope,$http,$location,$route,$routeParams, BookService, UserService, BookLoanService) {

    	$scope.init = function(){

    		$scope.user = {};
    		$scope.loadUsers();
    		$scope.loadBook($routeParams.id);
    		$scope.format = 'dd/MM/yyyy';
  			$scope.date = new Date();

    	};

        $scope.loadUsers = function(){

            UserService.getAll()
                .success(function(data) {
                    $scope.users = data;
                })
                .error(function(data, status) {
                    
                });
        };

        $scope.loadBook = function(id){

            BookService.get(id)
                .success(function(data) {
                    $scope.book = data;
                })
                .error(function(data, status) {
                    
                });
        };

        $scope.back = function(){
        	$location.path('/books');
        };

        $scope.clear = function(){
        	$scope.user = {};
        };

        $scope.loan = function(){

        	var loadBook = {
        		user: {id:$scope.user.id},
        		book: {id:$scope.book.id}
        	}

        	
            BookLoanService.create(loadBook)
                .success(function(data) {
                    $scope.back();
                })
                .error(function(data, status) {
                        
                });
        		
        };

        

        $scope.init();

});