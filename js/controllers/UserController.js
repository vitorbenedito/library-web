angular.module('LibraryApp.controllers', [])
.controller('UserController', function ($scope,$http,$location,$route,$routeParams) {

	var route = "/api/Users";

	$scope.init = function(){

		if ($route.current.method !== undefined) {
       		$scope[$route.current.method]();
     	}

	};

    $scope.getAll = function(){

        $scope.data = $http.get(route).success(function(response){
            $scope.Users = response;
        });
    };

    $scope.createUser = function(){
    	$scope.User = {};
    	$location.path('/Users/new');
    };

    $scope.editUser = function(User){
    	$location.path('/Users/edit/' + User._id);
    };

    $scope.back = function(){
    	$location.path('/Users');
    };

    $scope.clear = function(){
    	$scope.User = {};
    };

    $scope.remove = function(User){
    	$http.delete(route + "/" + User._id).
	    success(function(data) {
	   	  $scope.getAll();
	    }).
	    error(function(data, status) {
	        
	    });
    };

    $scope.edit  = function(){
    	$http.get(route + "/" + $routeParams.id).
	    success(function(data) {
	   	  $scope.User = data;
	    }).
	    error(function(data, status) {
	        
	    });
    };

    $scope.save = function(){
    	var routeSave = route;
    	var method = "post";
    	if($scope.User._id != null){
    		routeSave = routeSave + "/" + $scope.User._id;
    		method = "put";
    	}
	    $http[method](routeSave, JSON.stringify($scope.User)).
	    success(function(data) {
	      $scope.back();
	    }).
	    error(function(data, status) {
	        
	    });
    };

    $scope.init();

  });