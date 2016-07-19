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

    $scope.lunchbox = [];

    $scope.addItems = function (params) {
      console.log('PARAMS: ' + params.lunch);
      $scope.lunchbox.push(params);
    };
  });
