angular.module('LibraryApp')
    .controller('UserController', function ($scope,$http,$location,$route,$routeParams, UserService, BookLoanService) {

    	$scope.init = function(){

    		if ($route.current.method !== undefined) {
                $scope[$route.current.method]();
            }
    	};

        $scope.getAll = function(){

            $scope.data = UserService.getAll().success(function(response){
                $scope.users = response;
            });
        };

        $scope.createUser = function(){
        	$scope.user = {};
        	$location.path('/users/new');
        };

        $scope.editUser = function(user){
        	$location.path('/users/edit/' + user.id);
        };

        $scope.back = function(){
        	$location.path('/users');
        };

        $scope.clear = function(){
        	$scope.user = {};
        };

        $scope.remove = function(user){

        	UserService.delete(user.id)
        	    .success(function(data) {
        	   	  $scope.getAll();
        	    })
        	    .error(function(data, status) {
        	        
        	    });
        };

        $scope.edit  = function(){
        	UserService.get($routeParams.id)
        	    .success(function(data) {

        	   	   $scope.user = data;
                   $scope.bookLoans = {};

                   UserService.getBookLoans($routeParams.id)
                        .success(function(data) {
                            $scope.bookLoans = data;
                        })
                        .error(function(data, status) {
                            
                        });
        	    })
        	    .error(function(data, status) {
        	        
        	    });
        };

        $scope.returnBook = function(bookLoan){
            
            BookLoanService.returnBook(bookLoan.id)
                .success(function(data) {
                    $scope.edit();
                })
                .error(function(data, status) {
                        
                });
              
        };

        $scope.save = function(){

        	if($scope.user.id != null){

                UserService.update($scope.user.id, $scope.user)
                    .success(function(data) {
                      $scope.back();
                    })
                    .error(function(data, status) {
                        
                    });
        		
        	}else{

                UserService.create($scope.user)
                    .success(function(data) {
                      $scope.back();
                    })
                    .error(function(data, status) {
                        
                    });

            }
    	    
        };

        $scope.init();

});