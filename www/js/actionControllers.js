/* 用于跳转页面，搜索、过滤、排序景观的控制器 */
angular.module('action.controllers', [])

/*.controller('ActionCtrl', function($scope) {
  alert("Action controller");
})*/

 .controller("JumpCtrl", function ($scope, $state) {
    $scope.jumpToScenary = function () {
      $state.go('scenary');
    };
 })

;
