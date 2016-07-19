'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.data = {
    availableOptions: [

      {id: '1', name: 'Sports'},
      {id: '2', name: 'Economy'},
      {id: '3', name: 'Technology'},
      {id: '4', name: 'All users'}
    ],
    type: {id: '4', name: 'All users'} //This sets the default value of the select in the ui
    };

    $scope.htmlmsg = "";
    $scope.image = "";

    $scope.sendPush = function()
    {
    	console.log("Send message");
    	console.log($scope.image);
    	console.log($scope.htmlmsg);
    	console.log($scope.data.type.id);
    };
  });
