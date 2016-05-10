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
    $scope.mySandwich = [];
    $scope.addItem = function (item) {
      $scope.mySandwich.push({ item: item });
    };

    $scope.lunchbox = [];

    $scope.addSandwichToLunchBox = function () {
      var sarnie = '';
      for (var i = 0; i < $scope.mySandwich.length; i++) {
        sarnie += $scope.mySandwich[i].item + ' ';
      }

      $scope.lunchbox.push({ item: sarnie });
      $scope.mySandwich = [];
    };
  });
