angular.module('app.controllers', [])
	.controller("HeaderCtrl", function ($scope, $state) {
    })

    .controller("MapCtrl", function ($scope, $state) {
    })

	.controller("SceneryListCtrl", function ($scope, $state) {
    	$scope.jumpToScenery = function () {
      		$state.go('scenery');
    	};
	})

    .controller("FooterCtrl", function ($scope, $state) {
    })
;