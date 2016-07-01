var appControllers = angular.module('app.controllers', []);

appControllers.controller("SceneryListCtrl", function ($scope, $state) {
        $scope.jumpToScenery = function () {
            //$state.go('scenery');
            self.location = "scenery.html";
        };
    })

    .controller("SceneryInfoCtrl", function ($scope, $state) {
        $scope.isExpanded = false;
        $scope.popup = false;
        $scope.commentPopup = false;
        $scope.sharePopup = false;
        $scope.routePopup = false;
        $scope.reportPopup = false;
        // 默认应该设置为后台返回数据，而不是false
        $scope.isWishlist = false;
        $scope.isFootprint = false;
        $scope.isLike = false;

        $scope.expandIntro = function () {
            $scope.isExpanded = true;
        };

        $scope.showCommentPopup = function () {
            $scope.popup = true;
            $scope.commentPopup = true;
            $scope.sharePopup = false;
            $scope.routePopup = false;
            $scope.reportPopup = false;
        };
        $scope.hideCommentPopup = function () {
            $scope.popup = false;
            $scope.commentPopup = false;
        };      
        $scope.showSharePopup = function () {
            $scope.popup = true;
            $scope.sharePopup = true;
            $scope.commentPopup = false;
            $scope.routePopup = false;
            $scope.reportPopup = false;
        };
        $scope.hideSharePopup = function () {
            $scope.popup = false;
            $scope.sharePopup = false;
        }; 
        $scope.showRoutePopup = function () {
            $scope.popup = true;
            $scope.routePopup = true;
            $scope.sharePopup = false;
            $scope.commentPopup = false;
            $scope.reportPopup = false;
        };
        $scope.hideRoutePopup = function () {
            $scope.popup = false;
            $scope.routePopup = false;
        }; 
        $scope.showReportPopup = function () {
            $scope.popup = true;
            $scope.reportPopup = true;
            $scope.sharePopup = false;
            $scope.routePopup = false;
            $scope.commentPopup = false;
        };
        $scope.hideReportPopup = function () {
            $scope.popup = false;
            $scope.reportPopup = false;
        }; 

        $scope.commitComment = function () {
            // 提交评论
        };

        $scope.commitRoute = function () {
            // 查询路线
        };

        $scope.commitReport = function () {
            // 提交报错
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