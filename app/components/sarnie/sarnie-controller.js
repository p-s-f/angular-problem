'use strict';

/**
 * @ngdoc function
 * @name wdFusionUiClientApp.controller:InductionCtrl
 * @description
 * # InductionCtrl
 * Controller of the wdFusionUiClientApp
 */
angular.module('angularProblemApp')
  .controller('SarnieCtrl', function($scope) {

     var that = this;
     $scope.mySandwich = [];

     $scope.addItem = function (item) {
       $scope.mySandwich.push({ item: item });
     };

     $scope.addSandwichToLunchBox = function () {
       var sarnie = '';
       for (var i = 0; i < $scope.mySandwich.length; i++) {
         sarnie += $scope.mySandwich[i].item + ' ';
       }

       if (sarnie === 'Bacon Egg Sausage Tomato ') {
         sarnie = 'B.E.S.T';
       }

       $scope.mySandwich = [];
       that.addItemsToLunchbox({params: {item: sarnie}});
     };
  });
