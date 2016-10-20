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
	$scope.nodes = [{
	"title": "User Guide",
	"view_name": "",
	"level_1": [{
		"title": "Getting Started",
		"view_name": "gettingStarted",
		"level_2": [{
			"title": "Networking",
			"view_name": "",
			"level_3": [{
				"title": "Single Machine",
				"view_name": "UsingVagrant",
				"level_4": [{
					"title": "Docker Swarm",
					"view_name": "swarm",
					"level_5": []
				}, {
					"title": "Kubernetes",
					"view_name": "k8s",
					"level_5": []
				}, {
					"title": "Mesos",
					"view_name": "mesos",
					"level_5": []
				}, {
					"title": "Nomad",
					"view_name": "nomad",
					"level_5": []
				}]
			}, {
				"title": "Multiple Servers",
				"view_name": "WithNetworkedServers",
				"level_4": [{
					"title": "Docker Swarm",
					"view_name": "install-swarm",
					"level_5": []
				}, {
					"title": "Kubernetes",
					"view_name": "install-k8s",
					"level_5": []
				}, {
					"title": "BGP",
					"view_name": "bgp",
					"level_5": []
				}, {
					"title": "Cisco ACI",
					"view_name": "aci",
					"level_5": []
				}]
			}]
		}, {
			"title": "Storage",
			"view_name": "storage",
			"level_3": []
		}, {
			"title": "Cluster",
			"view_name": "cluster",
			"level_3": [{
				"title": "Single Machine",
				"view_name": "vagrant",
				"level_4": []
			}, {
				"title": "Multiple Servers",
				"view_name": "baremetal",
				"level_4": []
			}]
		}]
	}, {
		"title": "Networking",
		"view_name": "",
		"level_2": [{
			"title": "Features",
			"view_name": "",
			"level_3": []
		}, {
			"title": "Concepts and Terminology",
			"view_name": "",
			"level_3": []
		}, {
			"title": "Policies",
			"view_name": "",
			"level_3": []
		}, {
			"title": "Service Loadbalancing",
			"view_name": "",
			"level_3": []
		}, {
			"title": "Physical Networks",
			"view_name": "",
			"level_3": [{
				"title": "L3 Routed Networks",
				"view_name": "",
				"level_4": []
			}, {
				"title": "L2 Bridged Networks",
				"view_name": "",
				"level_4": []
			}, {
				"title": "Cisco ACI",
				"view_name": "",
				"level_4": []
			}]
		}, {
			"title": "IPAM and Service Discovery",
			"view_name": "",
			"level_3": []
		}, {
			"title": "IPv6",
			"view_name": "",
			"level_3": []
		}]
	}, {
		"title": "Storage",
		"view_name": "",
		"level_2": []
	}, {
		"title": "Cluster",
		"view_name": "",
		"level_2": []
	}]
}, {
	"title": "Tutorials and Talks",
	"view_name": "",
	"level_1": [{
		"title": "Tutorials",
		"view_name": "",
		"level_2": [{
			"title": "Container Networking Tutorial",
			"view_name": "",
			"level_3": []
		}, {
			"title": "Policies with Networking",
			"view_name": "",
			"level_3": []
		}]
	}, {
		"title": "Demonstration Videos",
		"view_name": "",
		"level_2": []
	}, {
		"title": "Community Talks",
		"view_name": "",
		"level_2": []
	}]
}, {
	"title": "Examples",
	"view_name": "",
	"level_1": [{
		"title": "Docker Compose Examples",
		"view_name": "",
		"level_2": []
	}, {
		"title": "Kubernetes Examples",
		"view_name": "",
		"level_2": []
	}, {
		"title": "Multicast Examples",
		"view_name": "",
		"level_2": []
	}, {
		"title": "Subitem 4Nomad Examples",
		"view_name": "",
		"level_2": []
	}]
}, {
	"title": "Reference",
	"view_name": "",
	"level_1": [{
		"title": " Network API Reference",
		"view_name": "",
		"level_2": []
	}, {
		"title": "Storage API Reference",
		"view_name": "",
		"level_2": []
	}, {
		"title": "Cluster API Reference",
		"view_name": "",
		"level_2": []
	}]
}];
});