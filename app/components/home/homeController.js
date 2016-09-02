angular.module('app').controller('HomeCtrl', function($scope,$location, $http,$rootScope,$uibModal,$anchorScroll) { 
	$scope.gotoSection = function(x) {
		var newHash = x;
		if ($location.hash() !== newHash) {
			// set the $location.hash to `newHash` and
			// $anchorScroll will automatically scroll to it
			$location.hash( x);
		} else {
			// call $anchorScroll() explicitly,
			// since $location.hash hasn't changed
			$anchorScroll();
		}
	};										  
			$scope.myInterval = 5000;
			$rootScope.hideFooter = false;										  
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  var slideImg = 1;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
slides.push({image: 'assets/images/slider_'+slideImg+'.jpg',
	  button:'Get Started with Contiv',
	  link:'#/documents',
	  title:'Join the mailing list  to get the latest updates!',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
      id: currIndex++ 
	  
	  });
slideImg++;
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
  });