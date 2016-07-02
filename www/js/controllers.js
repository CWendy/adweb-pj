var appControllers = angular.module('app.controllers', []);

appControllers
    .controller("LoginCtrl", function ($scope,$http) {
        // 登录
        $scope.login = function () {
            var username = $scope.username;
            var password = $scope.password;
            console.log("user:"+username+"password"+password);
            $http({
                url:'http://localhost:3000/user/login',
                method:'GRT',
                charst:'UTF-8',
                params:{
                    'username':username,
                    'password':password,
                }
            }).success(function(response){
                if(response == -1){
                    console.log("登录失败");
                }else{
                    console.log("用户id"+response);
                    localStorage.setItem("userID",response);
                    self.location = "search.html";
                }
            });

            // 跳转页面(test用)
          self.location = "search.html";
        };


        $scope.register = function () {
            var username = $scope.username;
            var password = $scope.password;
            console.log("user:"+username+"password"+password);
            $http({
                url:'http://localhost:3000/user/signup',
                method:'GET',
                charst:'UTF-8',
                params:{
                    'username':username,
                    'password':password,
                }

            }).success(function(response){
                if(response == -1){
                    console.log("注册失败");
                }else{
                    console.log("用户id"+response);
                    localStorage.setItem("userID",response);
                    self.location = "search.html";
                }
            });

            // 跳转页面

        };

    })  

    .controller("HeaderCtrl", function ($scope) {
        // 返回上一页
        $scope.goBack = function () {
            history.go(-1);
        };
    })

    .controller("SearchCtrl", function ($scope,$http) {

        $scope.isHistoryShown = false;

        // 显示/隐藏搜索历史
        $scope.showHistory = function () {
            $scope.isHistoryShown = !$scope.isHistoryShown;

        };
        $scope.search = function(){//根据关键字搜索获得景观列表
            var keyword = $scope.key;
            console.log(keyword);
            $http({
                url:'http://localhost:3000/',
                method:'GET',
                charst:'UTF-8',
                params:{
                    'key':keyword,
                }

            }).success(function(response){//返回的json格式的景观列表
                //存到scope里
            });

        };

    })

    .controller("FilterCtrl", function ($scope) {
        $scope.isFilter1On = true;
        $scope.isFilter2On = true;
        $scope.isFilter3On = true;

        $scope.flipFilter1 = function () {
            $scope.isFilter1On = !$scope.isFilter1On;
        };

        $scope.flipFilter2 = function () {
            $scope.isFilter2On = !$scope.isFilter2On;
        };

        $scope.flipFilter3 = function () {
            $scope.isFilter3On = !$scope.isFilter3On;
        };        
    })

    .controller("SceneryListCtrl", function ($scope, $ionicLoading, $http) {
        $scope.load = function () {
            $ionicLoading.show({
              template: 'Loading...'
            });
        }
        $scope.hide = function (){
            $ionicLoading.hide();
        };

        $scope.loadList = function (baiduList) {
                var jsonBaiduList = JSON.parse(baiduList);
               console.log(jsonBaiduList);
                //获取附近景观列表
                $http({
                    url:'http://localhost:3000/',
                    method:'GET',
                    charst:'UTF-8',
                    params: jsonBaiduList

                }).success(function(response){//返回的json格式的景观列表
                      $scope.hide();
                      //存到scope里
                });
                $scope.hide();
        }

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

        $scope.jumpToScenery = function () {//获取点击的景观名称返回景观详细信息
            var name = document.getElementById("scenery-name").innerHTML;
            $http({
                url:'http://localhost:3000/',
                method:'GET',
                charst:'UTF-8',
                params:{
                    'scenename':name,
                }

            }).success(function(response){//返回的json格式的景观列表
                //存到scope里
                //景观id存在rootscope里面sceneID
            });
            self.location = "scenery.html";
        };
    })

    .controller("SceneryInfoCtrl", function ($scope,$rootScope) {


        $rootScope.scenelng = 121.615;
        $rootScope.scenelat = 31.195;

        $scope.lng = $rootScope.scenelng;
        $scope.lat = $rootScope.scenelat;




        $scope.isExpanded = false;
        $scope.popup = false;
        $scope.commentPopup = false;
        $scope.sharePopup = false;
        $scope.routePopup = false;
        $scope.reportPopup = false;
        $scope.qabtPopup = false;
        $scope.questionnairePopup = false;
        $scope.advicePopup = false;
        $scope.tagPopup = false;
        $scope.tagType = "景观类型";
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
            $scope.tagPopup = false;
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
            $scope.tagPopup = false;
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
            $scope.tagPopup = false;
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
            $scope.tagPopup = false;
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
            $scope.tagPopup = false;
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
            $scope.tagPopup = false;
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
            $scope.tagPopup = false;
        };
        $scope.hideAdvicePopup = function () {
            $scope.popup = false;
            $scope.advicePopup = false;
        }; 
        $scope.showTagPopup = function () {
            $scope.popup = true;
            $scope.tagPopup = true;
            $scope.advicePopup = false;
            $scope.sharePopup = false;
            $scope.routePopup = false;
            $scope.reportPopup = false;
            $scope.qabtPopup = false;
            $scope.questionnairePopup = false;
            $scope.commentPopup = false;
        };
        $scope.hideTagPopup = function () {
            $scope.popup = false;
            $scope.tagPopup = false;
        }; 
        $scope.addTagType1 = function () {
            $scope.tagType = "景观类型";           
            $scope.showTagPopup();
        }; 
        $scope.addTagType2 = function () {
            $scope.tagType = "活动类型";          
            $scope.showTagPopup();
        }; 
        $scope.addTagType3 = function () {
            $scope.tagType = "建议";            
            $scope.showTagPopup();
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
            if($scope.isWishlist){//加入
                $http({
                    url:'http://localhost:3000/',
                    method:'GET',
                    charst:'UTF-8',
                    params:{
                        'userid':localStorage.getItem("userID"),
                        'scenename':$rootScope.sceneID,//景观id存在rootscope里面
                        'type':"wish",
                    }

                }).success(function(response){//返回的json格式的景观列表
                    //存到scope里
                });

            }else{//删除
                $http({
                    url:'http://localhost:3000/',
                    method:'GET',
                    charst:'UTF-8',
                    params:{
                        'userid':localStorage.getItem("userID"),
                        'scenename':$rootScope.sceneID,//景观id存在rootscope里面
                        'type':"wish",
                    }

                }).success(function(response){//返回的json格式的景观列表
                    //存到scope里
                });
            }
        };
        $scope.flipFootprint = function () {
            $scope.isFootprint = !$scope.isFootprint;

            if($scope.isFootprint){//加入
                $http({
                    url:'http://localhost:3000/',
                    method:'GET',
                    charst:'UTF-8',
                    params:{
                        'userid':localStorage.getItem("userID"),
                        'scenename':$rootScope.sceneID,//景观id存在rootscope里面
                        'type':"foot",
                    }

                }).success(function(response){//返回的json格式的景观列表
                    //存到scope里
                });

            }else{//删除
                $http({
                    url:'http://localhost:3000/',
                    method:'GET',
                    charst:'UTF-8',
                    params:{
                        'userid':localStorage.getItem("userID"),
                        'scenename':$rootScope.sceneID,//景观id存在rootscope里面
                        'type':"foot",
                    }

                }).success(function(response){//返回的json格式的景观列表
                    //存到scope里
                });
            }

        };
        $scope.flipLike = function () {
            $scope.isLike = !$scope.isLike;
            if($scope.isLike){//加入
                $http({
                    url:'http://localhost:3000/',
                    method:'GET',
                    charst:'UTF-8',
                    params:{
                        'userid':localStorage.getItem("userID"),
                        'scenename':$rootScope.sceneID,//景观id存在rootscope里面
                        'type':"like",
                    }

                }).success(function(response){//返回的json格式的景观列表
                    //存到scope里
                });

            }else{//删除
                $http({
                    url:'http://localhost:3000/',
                    method:'GET',
                    charst:'UTF-8',
                    params:{
                        'userid':localStorage.getItem("userID"),
                        'scenename':$rootScope.sceneID,//景观id存在rootscope里面
                        'type':"like",
                    }

                }).success(function(response){//返回的json格式的景观列表
                    //存到scope里
                });
            }
        };
    })

    .controller("TagCtrl", function ($scope) {
        $scope.tag1 = "历史";
        $scope.tagCnt1 = 10;
        $scope.tag2 = "文化";
        $scope.tagCnt2 = 20;
        $scope.isTag1Clicked = false;

        // 显示/隐藏搜索历史
        $scope.addTagCnt = function (tag) {
            if (tag == "历史") {
                $scope.tagCnt1++;
                $scope.isTag1Clicked = true;
            }
            else
                $scope.tagCnt2++;
        };

        $scope.commitTag = function () {
            // 添加tag
        };
    });