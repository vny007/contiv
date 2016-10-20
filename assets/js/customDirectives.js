app.directive('vmenuModule', function() {
return {
        restrict : 'A',
		scope    : true,
        link     : function(scope, element, attrs) {
	$('#myNodes li').clone().appendTo('#myDataSearch');
	
	document.getElementById("mySearch").addEventListener("keyup", function(){
		    document.getElementById("myDataSearch").style.display = 'block';
			var $partMneu = $('#myNodes').clone();
			$('#myDataSearch').empty();
			var value = document.getElementById("mySearch").value;
			if(!value.length > 0) {
				document.getElementById("myNodes").style.display = 'block';
				document.getElementById("myDataSearch").style.display = 'none';
				return};
			document.getElementById("myNodes").style.display = 'none';
			$('li a:contains('+value+')',$partMneu).appendTo('#myDataSearch');									   
	}); 
	
	
	
			$('.leftCont').width($('.mainLeft').width()).height($(window).height()-68);
			$( window ).resize(function() {
				$('.leftCont').width($('.mainLeft').width()).height($(window).height()-68);
			});
			$(element).vmenuModule({
					Speed: 200,
					autostart: false,
					autohide: false
				});
			},
       controller: function($scope, $element){}
	};

});
app.directive('contivYoutube', function() {
return {
        restrict : 'EA',
		scope    : {
			playlistid: "="
			},
        link     : function(scope, element, attrs) {
		console.log(scope);
		scope.$watch('playlistid',function(newVal,oldVal){
										    console.log(newVal,oldVal);
										   if(!angular.isUndefined(newVal)){
											  
			$(element).ycp(
				playlist = 10, // number of videos playlist count
				autoplay = false, //true or false
				apikey = 'AIzaSyAlbcVQdOgMhn0pNf3h5MwdBs1FIfN8CXQ', // your google api key
				defaultPlayList = scope.playlistid //'PL5Hg9MkZ9C_ssjoV9j1wYzsMQxT0MMxnP'
			);
										   }
										   });
	   },
       controller: function($scope, $element){}
	};

});

app.directive('contivYoutubePlaylist', ['videoService',function(videoService) {
return {
        restrict : 'EA',
		transclude : false,
		templateUrl : 'app/components/documents/video/videosItems.html',
		scope: {
         myplaylist: "=",
		 playlistid: "="
      	},
        link     : function(scope, element, attrs) {
			//console.log();
			videoService.myPlayListItems( scope.playlistid ).then(function( response ){
											 scope.myplaylist = response;
											 console.log('sss', response );
											 });
		},
       controller: function($scope, $element){ 
		   
		   
	   }
	};

}]);

 app.directive('ngSpinnerBar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default

                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$stateChangeStart', function() {
					
					//$(document.body).find('.fade-in-up_inner').addClass('noopacity');
                    //element.removeClass('hide'); // show spinner bar
					
					
                });
 
$rootScope.$on('$viewContentLoading', function (event) {
            console.log('lock & loaded')
    });
                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$stateChangeSuccess', function() {
                   
                  //  Layout.setSidebarMenuActiveLink('match'); // activate selected link in the sidebar menu
                   
                    // auto scorll to page top
                    setTimeout(function () {//alert('ok');
					   $(document.body).find('.fade-in-up_inner').removeClass('noopacity');
						element.addClass('hide'); // hide spinner bar
						$('body').removeClass('page-on-load'); // remove page loading indicator
						
                       $("html").animate({scrollTop: $('body').offset().top}, 1000);
					   
                    }, 1000);     
                });

                // handle errors
                $rootScope.$on('$stateNotFound', function() {
                    element.addClass('hide'); // hide spinner bar
					$(document.body).find('.fade-in-up_inner').removeClass('noopacity');
                });

                // handle errors
                $rootScope.$on('$stateChangeError', function() {
                    element.addClass('hide'); // hide spinner bar
					$(document.body).find('.fade-in-up_inner').removeClass('noopacity');
                });
            }
        };
    }
]);
 
app.filter('custom', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
	
    var result = {};
    angular.forEach(input, function(value, key) {
									console.log(value);
      var actual = ('' + value).toLowerCase();
      if (actual.indexOf(expected) !== -1) {
        result[key] = value;
      }
    });
    return result;
  }
}); 