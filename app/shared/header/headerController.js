app.controller('HeaderCtrl', function ($scope,$rootScope) {


		$scope.showGridselect =  function(){
			var pos = angular.element(document).find("#wgtSelector").position();
			angular.element(document).find( "#draggable").css({top: pos.top + 55, left: pos.left + 40 - $( "#draggable").width()/2}).show();
		};
		//$scope.searchVal = '';
		$scope.doSearch = function(e,myvalue){
			 var charCode = (e.which) ? e.which : e.keyCode;        
    // do something with myValue
			$rootScope.$broadcast('doFilter',myvalue);
		};
});