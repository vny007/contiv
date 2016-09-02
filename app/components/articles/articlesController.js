angular.module('app').controller('WizardCtrl', function ($scope, $rootScope,$state) {
					$rootScope.hideFooter = true;						 
											  // $scope.dynamic = 10;
											   //$scope.$setValidity(true, 2);
$scope.wizard = {};
$scope.steps = [
    {
        templateUrl: 'app/components/wizard/steps/step1View.html',
        title: 'Introduction',
		hasForm: false,
		controller:'Step1Ctrl',
		resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/wizard/steps/step1Controller.js',
							] 
						});
					  }]
				 }
    },
    {
        templateUrl: 'app/components/wizard/steps/step2View.html',
        hasForm: false,
        title: 'Update validity',
		controller:'Step2Ctrl',
		resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/wizard/steps/step2Controller.js',
							] 
						});
					  }]
				 }
    },
    {
        templateUrl: 'app/components/wizard/steps/step3View.html',
        hasForm: true,
        title: 'Automatically update validity',
		controller:'Step3Ctrl',
		resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/wizard/steps/step3Controller.js',
							] 
						});
					  }]
				 }
    },
    {
        templateUrl: 'app/components/wizard/steps/step4View.html',
        title: 'Congratulations',
		controller:'Step4Ctrl',
		resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/wizard/steps/step4Controller.js',
							] 
						});
					  }]
				 }
    },
    {
        templateUrl: 'app/components/wizard/steps/step5View.html',
        title: 'Congratulations',
		controller:'Step5Ctrl',
		resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/wizard/steps/step5Controller.js',
							] 
						});
					  }]
				 }
    },
    {
        templateUrl: 'app/components/wizard/steps/step6View.html',
        title: 'Congratulations',
		controller:'Step6Ctrl',
		resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/wizard/steps/step6Controller.js',
							] 
						});
					  }]
				 }
    },
    {
        templateUrl: 'app/components/wizard/steps/step7View.html',
        title: 'Congratulations',
		controller:'Step7Ctrl',
		resolve: {
					 deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
							files: [
								'app/components/wizard/steps/step7Controller.js',
							] 
						});
					  }]
				 }
    }
];
  

  $scope.closeWizard = function () {
    //$uibModalInstance.close();
	$state.go('wizard');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.doValidation = function( formData ){
	   $rootScope.$broadcast('sendNotification',formData);
  };
});