'use strict';

angular.module('angularProblemApp').component('sarnie', {
  templateUrl: 'components/sarnie/sarnie-view.html',
  controller: 'SarnieCtrl',
  controllerAs: 'SarnieCtrl',
  bindings: {
    breakfastItems: '<',
    addItemsToLunchbox: '&addItems',
  }
});
