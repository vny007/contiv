app.directive('vmenuModule', function() {
return {
        restrict : 'A',
		scope    : true,
        link     : function(scope, element, attrs) {
			
			$('.leftCont').width($('.mainLeft').width()).height($(window).height()-68);
			$( window ).resize(function() {
				$('.leftCont').width($('.mainLeft').width()).height($(window).height()-68);
			});
			$(element).vmenuModule({
					Speed: 200,
					autostart: true,
					autohide: false
				});
			},
       controller: function($scope, $element){}
	};

});

 app.directive('ngSpinnerBar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default

                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$stateChangeStart', function() {
					
					//$(document.body).find('.fade-in-up_inner').addClass('noopacity');
                   // element.removeClass('hide'); // show spinner bar
					
					
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