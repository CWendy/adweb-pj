/* 用于显示景观信息的控制器 */
angular.module('scenary.controllers', [])

.controller('ScenaryCtrl', function($scope, $stateParams) {
  alert("Scenary controller: " + $stateParams.data);
})

;
