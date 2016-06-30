var appControllers = angular.module('app.controllers', []);

appControllers.controller("SceneryListCtrl", function ($scope, $state) {
        $scope.jumpToScenery = function () {
            $state.go('scenery');
        };
    })

    .controller("SceneryInfoCtrl", function ($scope, $state) {
        $scope.isExpanded = false;
        $scope.commentPopup = false;
        // 默认应该设置为后台返回数据，而不是false
        $scope.isWishlist = false;
        $scope.isFootprint = false;
        $scope.isLike = false;

        $scope.expandIntro = function () {
            $scope.isExpanded = true;
        };

        $scope.showCommentPopup = function () {
            $scope.commentPopup = true;
        };
        $scope.hideCommentPopup = function () {
            $scope.commentPopup = false;
        };      

        $scope.flipWishlist = function () {
            $scope.isWishlist = !$scope.isWishlist;
        };
        $scope.flipFootprint = function () {
            $scope.isFootprint = !$scope.isFootprint;
        };
        $scope.flipLike = function () {
            $scope.isLike = !$scope.isLike;
        };
});