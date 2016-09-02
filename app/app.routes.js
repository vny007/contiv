var app = angular.module('app', ['ui.bootstrap', 'ngAnimate','ngSanitize', 'toastr','ui.router','dndLists','multiStepForm','angular-loading-bar','oc.lazyLoad','jQueryScrollbar','smoothScroll']);
	app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
		//AIzaSyAlbcVQdOgMhn0pNf3h5MwdBs1FIfN8CXQ
		$ocLazyLoadProvider.config({
			 debug : true
		});
	}]);

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
			}).state('documents', {
			  url   :'/documents',
			 templateUrl: 'app/components/documents/documentsView.html',
			 controller : 'DocuCtrl',
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
					controller : 'WizardCtrl',
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
					controller : 'WizardCtrl',
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
					controller : 'WizardCtrl',
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
					controller : 'WizardCtrl',
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
			 controller : 'WizardCtrl',
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
					controller : 'WizardCtrl',
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
