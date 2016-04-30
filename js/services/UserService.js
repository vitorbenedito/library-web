angular.module('LibraryApp.services', [])
.service('UserService', function ($http, urls) {

	this.getAll = function(){
		return $http.get(urls.users);
	};

	this.create = function(user){
		return $http({
			    url: urls.users,
			    method: "POST",
			    data: JSON.stringify(user),
			    headers: {'Content-Type': 'application/json'}
		})
	};

	this.update = function(id, user){
		return $http({
			    url: urls.users + "/" + id,
			    method: "PUT",
			    data: JSON.stringify(user),
			    headers: {'Content-Type': 'application/json'}
		})
	};

	this.get = function(id){
		return $http.get(urls.users + "/" + id);
	};

	this.delete = function(id){
		return $http.delete(urls.users + "/" + id);
	};

  });