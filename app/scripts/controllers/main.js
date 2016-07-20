'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    //Initialize add/remove messages buttons
    $scope.remove = false;
    $scope.add = true;

    $scope.description = "";

    $scope.addMessage = function()
    {
      $scope.choices.push({id: $scope.choices.length+1, image: "", htmlmsg: ""});
      $scope.remove = true;
      if ($scope.choices.length == 5)
      {
        $scope.add = false;
      }
    };

    $scope.removeMessage = function() {
      if ($scope.choices.length > 1)
      {
        var lastItem = $scope.choices.length-1;
        $scope.choices.splice(lastItem);
        if ($scope.choices.length == 1)
        {
          $scope.remove = false;
        }
        else
        {
          if ($scope.choices.length < 5)
          {
            $scope.add = true;
          }
          $scope.remove = true;
        } 
      }
    };

    $scope.choices = [{id: 1, image: "", htmlmsg: ""}];
    

    $scope.htmlmsg = "";
    $scope.image = "";

    $scope.startSelectValues = function()
    {
        $scope.data = {
        availableOptions: [

            {id: '1', name: 'Sports'},
            {id: '2', name: 'Economy'},
            {id: '3', name: 'Technology'},
            {id: '4', name: 'All users'}
          ],
          type: {id: '4', name: 'All users'} //This sets the default value of the select in the ui
          };
    };

    $scope.sendPush = function(form)
    {
      console.log("Send message");

      for (var i = 0; i < $scope.choices.length; i++)
      {
        console.log($scope.choices[i].id + " / " + $scope.choices[i].image + " / " + $scope.choices[i].htmlmsg);
      }

      console.log($scope.data.type.id);
      console.log($scope.description);
      //$scope.content = 
      console.log(angular.toJson($scope.choices));

      $scope.formData = {
        'type': $scope.data.type.id,
        'description': $scope.description,
        'messages': $scope.choices
      };

      //Prepare send data (params)
      
      var data = $.param({'type': $scope.data.type.id,
                          'description': $scope.description,
                          'messages': angular.toJson($scope.choices)});        
      var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}} 

      $http.post("http://192.168.110.131:8888/push/receive_data.php",data,config)
      .success(function(response) {
          $scope.data = response;
          console.log($scope.data);
          $scope.startSelectValues();
      });



      
    };

    $scope.startSelectValues();
  });
