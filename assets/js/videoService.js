angular.module('app').service('videoService', function( $http,$q,youTubeChannel ) {
	
	this.myPlayLists = function( ) {
		var deferred = $q.defer();
		$http({
			method  : 'GET',
			url     :"https://www.googleapis.com/youtube/v3/playlists?part=contentDetails,snippet&channelId="+youTubeChannel.channelId+"&maxResults=15&key="+youTubeChannel.apikey,
			async   : true,
			cache   : true,
			dataType: 'jsonp',
		}).success( function(response, status, headers, config) {
			deferred.resolve(response);
		})
		.error(function(errResp) {
			deferred.reject({ message: "Really bad" });
		});
		return deferred.promise;
	}
	this.myPlayListItems = function( playlistId = 'PL5Hg9MkZ9C_ssjoV9j1wYzsMQxT0MMxnP') {
		var deferred = $q.defer();
		$http({
			method  : 'GET',
			url     : "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId="+playlistId+"&key="+youTubeChannel.apikey,
			async   : true,
			cache   : true,
			dataType: 'jsonp',
		}).success( function(response, status, headers, config) {
			deferred.resolve(response);
		})
		.error(function(errResp) {
			deferred.reject({ message: "Really bad" });
		});
		return deferred.promise;
	}
});