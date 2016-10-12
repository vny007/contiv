angular.module('app').controller('DocsCtrl', function ($scope, $rootScope,$state) {
							$rootScope.hideFooter = true;				 
											  // $scope.dynamic = 10;
											   //$scope.$setValidity(true, 2);
		$scope.toggleLeftMenu = function(){
		angular.element(document).find('.mainLeft').toggleClass('open');
		var left = -15;
		if(angular.element(document).find('.mainLeft').hasClass('open')){
			left = -15;
		}
		else{
			left = -300;
		}
		angular.element(document).find('.mainLeft').animate({
				left: left,
				
			}, 500);
	};
$( window ).resize(function() {
				if( $(window).width() >748){
					angular.element(document).find('.mainLeft').animate({
					left: 'auto',
					
					}, 500);
				}
			});
$scope.wizard = {};
$scope.steps = [];
  

  $scope.closeWizard = function () {
    //$uibModalInstance.close();
	$state.go('wizard');
  };

    $scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
});