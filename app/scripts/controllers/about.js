'use strict';

/**
 * @ngdoc function
 * @name personlSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the personlSiteApp
 */
angular.module('personlSiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
