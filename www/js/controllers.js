var appControllers = angular.module('app.controllers', []);

appControllers
    .controller("LoginCtrl", function ($scope) {
        // 登录
        $scope.login = function () {

            // 跳转页面
            self.location = "search.html";
        };
    })  

    .controller("HeaderCtrl", function ($scope) {
        // 返回上一页
        $scope.goBack = function () {
            history.go(-1);
        };
    })

    .controller("SearchCtrl", function ($scope) {
        $scope.isHistoryShown = false;

        // 显示/隐藏搜索历史
        $scope.showHistory = function () {
            $scope.isHistoryShown = !$scope.isHistoryShown;
        };
    })

    .controller("SceneryListCtrl", function ($scope) {
        // 排序下拉菜单控制
        $scope.isSortMenuShown = false;
        $scope.isSortByRecommend = true; // 智能排序
        $scope.isSortByRating = false; // 评分最高
        $scope.isSortByWishlist = false; // 最多想去
        $scope.isSortByFootprint = false; // 最多去过
        $scope.isSortByLike = false; // 最多喜欢
        $scope.sortMetric = "智能排序";

        $scope.showSortMenu = function () {
            $scope.isSortMenuShown = !$scope.isSortMenuShown;
        };

        $scope.sortByRecommend = function () {
            $scope.isSortByRecommend = true; 
            $scope.isSortByRating = false;
            $scope.isSortByWishlist = false;
            $scope.isSortByFootprint = false;
            $scope.isSortByLike = false;
            $scope.sortMetric = "智能排序";
            $scope.isSortMenuShown = false;
        };

        $scope.sortByRating = function () {
            $scope.isSortByRecommend = false; 
            $scope.isSortByRating = true;
            $scope.isSortByWishlist = false;
            $scope.isSortByFootprint = false;
            $scope.isSortByLike = false;
            $scope.sortMetric = "最高评分";
            $scope.isSortMenuShown = false;
        };

        $scope.sortByWishlist = function () {
            $scope.isSortByRecommend = false; 
            $scope.isSortByRating = false;
            $scope.isSortByWishlist = true;
            $scope.isSortByFootprint = false;
            $scope.isSortByLike = false;
            $scope.sortMetric = "最多想去";
            $scope.isSortMenuShown = false;
        };

        $scope.sortByFootprint = function () {
            $scope.isSortByRecommend = false; 
            $scope.isSortByRating = false;
            $scope.isSortByWishlist = false;
            $scope.isSortByFootprint = true;
            $scope.isSortByLike = false;
            $scope.sortMetric = "最多去过";
            $scope.isSortMenuShown = false;
        };

        $scope.sortByLike = function () {
            $scope.isSortByRecommend = false; 
            $scope.isSortByRating = false;
            $scope.isSortByWishlist = false;
            $scope.isSortByFootprint = false;
            $scope.isSortByLike = true;
            $scope.sortMetric = "最多喜欢";
            $scope.isSortMenuShown = false;
        };

        $scope.jumpToScenery = function () {
            self.location = "scenery.html";
        };
    })

    .controller("SceneryInfoCtrl", function ($scope) {
        $scope.isExpanded = false;
        $scope.popup = false;
        $scope.commentPopup = false;
        $scope.sharePopup = false;
        $scope.routePopup = false;
        $scope.reportPopup = false;
        $scope.qabtPopup = false;
        $scope.questionnairePopup = false;
        $scope.advicePopup = false;
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
            $scope.qabtPopup = false;
            $scope.questionnairePopup = false;
            $scope.advicePopup = false;
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
            $scope.qabtPopup = false;
            $scope.questionnairePopup = false;
            $scope.advicePopup = false;
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
            $scope.qabtPopup = false;
            $scope.questionnairePopup = false;
            $scope.advicePopup = false;
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
            $scope.qabtPopup = false;
            $scope.questionnairePopup = false;
            $scope.advicePopup = false;
        };
        $scope.hideReportPopup = function () {
            $scope.popup = false;
            $scope.reportPopup = false;
        }; 
        $scope.showQabtPopup = function () {
            $scope.popup = true;
            $scope.qabtPopup = true;
            $scope.sharePopup = false;
            $scope.routePopup = false;
            $scope.reportPopup = false;
            $scope.commentPopup = false;
            $scope.questionnairePopup = false;
            $scope.advicePopup = false;
        };
        $scope.hideQabtPopup = function () {
            $scope.popup = false;
            $scope.qabtPopup = false;
        }; 
        $scope.showQuestionnairePopup = function () {
            $scope.popup = true;
            $scope.questionnairePopup = true;
            $scope.sharePopup = false;
            $scope.routePopup = false;
            $scope.reportPopup = false;
            $scope.qabtPopup = false;
            $scope.commentPopup = false;
            $scope.advicePopup = false;
        };
        $scope.hideQuestionnairePopup = function () {
            $scope.popup = false;
            $scope.questionnairePopup = false;
        }; 
        $scope.showAdvicePopup = function () {
            $scope.popup = true;
            $scope.advicePopup = true;
            $scope.sharePopup = false;
            $scope.routePopup = false;
            $scope.reportPopup = false;
            $scope.qabtPopup = false;
            $scope.questionnairePopup = false;
            $scope.commentPopup = false;
        };
        $scope.hideAdvicePopup = function () {
            $scope.popup = false;
            $scope.advicePopup = false;
        }; 

        $scope.commitComment = function () {
            // 提交评论

            // 显示调查问卷和建议按钮
            $scope.showQabtPopup();
        };

        $scope.commitRoute = function () {
            // 查询路线
        };

        $scope.commitReport = function () {
            // 提交报错

            $scope.hideReportPopup();
        };
        
        $scope.commitQuestionnaire = function () {
            // 提交调查问卷

            $scope.hideQuestionnairePopup();
        };

        $scope.commitAdvice = function () {
            // 提交建议

            $scope.hideAdvicePopup();
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