'use strict';

/**
 * @ngdoc function
 * @name angularProblemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProblemApp
 */

 angular.module('angularProblemApp')
  .controller('MainCtrl', function ($scope) {
    $scope.breakfastItems = ['Bacon', 'Egg', 'Sausage', 'Tomato', 'Black Pudding'];
    $scope.breakfastItemsAlt = ['Ham', 'Cheese', 'Salad', 'Chips', 'Hash Brown'];

    $scope.lunchbox = [];

    $scope.addItems = function (params) {
      $scope.lunchbox.push(params);
    };
  });
