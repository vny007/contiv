var app = angular.module('app', ['ui.bootstrap', 'ngAnimate','ngSanitize', 'toastr','ui.router','dndLists','multiStepForm','angular-loading-bar','oc.lazyLoad','jQueryScrollbar','smoothScroll']);
	app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
		//AIzaSyAlbcVQdOgMhn0pNf3h5MwdBs1FIfN8CXQ
		$ocLazyLoadProvider.config({
			 debug : true
		});
	}]);
  app.constant('youTubeChannel', {'apikey':'AIzaSyAlbcVQdOgMhn0pNf3h5MwdBs1FIfN8CXQ','channelId':'UCAyZuScYlGduBBjQjYq7RvQ'});

  app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

		//$locationProvider.html5Mode(true);
		$stateProvider.state('home', {
			  url   :'/',
			 templateUrl: 'app/components/home/homeView.html',
			 controller : 'HomeCtrl',
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/home/homeController.js',
							] 
						});
					  }]
				 }
			}).state('demo', {
			  url   :'/documents/demo',
			 templateUrl: 'app/components/documents/video/videosView.html',
			 controller : 'VideoCtrl',
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'assets/js/videoService.js',
								'app/components/documents/video/videosController.js',
							] 
						});
					  }]
				 }
			}).state('demo.play', {
			  url   :'/:playListId',
			 views: {
				'documentContent': {
					templateUrl: function(params) {
						return 'app/components/documents/video/videosPlayView.html';
					},
					controller : function( $scope, $state){
						$scope.playlistid = $state.params.playListId;
						//console.log($scope.playlistid);
					},
				}
			},
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'assets/js/videoService.js',
								'app/components/documents/video/videosController.js',
							] 
						});
					  }]
				 }
			}).state('documents', {
			  url   :'/documents',
			 templateUrl: 'app/components/documents/documentsView.html',
			 controller : 'DocsCtrl',
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/documents/documentsController.js',
							] 
						});
					  }]
				 }
			}).state('documents.child', {
			  url   :'/:child',
			 //templateUrl: 'app/components/documents/documentsView.html',
			views: {
				'documentContent': {
					templateUrl: function(params) {
						return 'app/components/documents/views/' + params.child + '.html' ;
					},
					controller : 'DocsCtrl',
				}
			},
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/documents/documentsController.js',
							] 
						});
					  }]
				 }
			}).state('documents.child_2', {
			  url   :'/:folder/:file',
			views: {
				'documentContent': {
					templateUrl: function(params) {
						
						return 'app/components/documents/views/' + params.folder + '/' + params.file + '.html' ;
					},
					controller : 'DocsCtrl',
				}
			},
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/documents/documentsController.js',
							] 
						});
					  }]
				 }
			}).state('documents.child_3', {
			  url   :'/:folder/:folder_2/:file',
			views: {
				'documentContent': {
					templateUrl: function(params) {
						return 'app/components/documents/views/' + params.folder + '/' + params.folder_2 + '/' + params.file + '.html' ;
					},
					controller : 'DocsCtrl',
				}
			},
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/documents/documentsController.js',
							] 
						});
					  }]
				 }
			}).state('documents.child_4', {
			  url   :'/:folder/:folder_2/:folder_3/:file',
			views: {
				'documentContent': {
					templateUrl: function(params) {
						return 'app/components/documents/views/' + params.folder + '/' + params.folder_2 + '/' + params.folder_3 + '/' + params.file + '.html' ;
					},
					controller : 'DocsCtrl',
				}
			},
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/documents/documentsController.js',
							] 
						});
					  }]
				 }
			}).state('articles', {
			  url   :'/articles',
			 templateUrl: 'app/components/articles/articlesView.html',
			 controller : 'ArticleCtrl',
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/articles/articlesController.js',
							] 
						});
					  }]
				 }
			}).state('articles.child', {
			  url   :'/:child',
			 //templateUrl: 'app/components/documents/documentsView.html',
			views: {
				'articlesContent': {
					templateUrl: function(params) {
						return 'app/components/articles/views/' + params.child + '.html' ;
					},
					controller : 'ArticleCtrl',
				}
			},
			 resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/articles/articlesController.js',
							] 
						});
					  }]
				 }
			});
		
		$urlRouterProvider.otherwise('/');

  });

 app.run(function($rootScope) {
				  $rootScope.steptagline = '';
				  $rootScope.hideFooter = true;

				  });
app.directive('uiSrefIf', function($compile) {
    return {
        link: function($scope, $element, $attrs) {

            var uiSrefVal = $attrs.uiSrefVal,
                uiSrefIf  = $attrs.uiSrefIf;

            $element.removeAttr('ui-sref-if');
            $element.removeAttr('ui-sref-val');



            $scope.$watch(
                function(){
                    return $scope.$eval(uiSrefIf);
                },
                function(bool) {
                    if (bool) {

                        $element.attr('ui-sref', uiSrefVal);
                    } else {

                        $element.removeAttr('ui-sref');
                        $element.removeAttr('href');
                    }
                    $compile($element)($scope);
                }
            );
        }
    };
});