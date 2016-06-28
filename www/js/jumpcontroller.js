/**
 * Created by qi on 2016/6/28.
 */
angular.module('jump.controllers', [])
  .controller("jumpcontroller", function ($scope,$state) {
    $scope.loginTapped = function () {
      $state.go('scenary');
    };
  });
