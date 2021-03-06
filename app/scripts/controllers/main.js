'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $http, LOCAL_PUSH_SERVER_URL_LOCALHOST) {
    
    //Initialize add/remove messages buttons
    $scope.remove = false;
    $scope.add = true;
    $scope.validation = true;
    $scope.success = false;

    $scope.description = "";
    $scope.title = "";

    $scope.addMessage = function()
    {
      $scope.choices.push({id: $scope.choices.length+1, image: "", htmlmsg: "", source:"", app_message: "" + Math.floor(Math.random() * 2)});
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

    $scope.choices = [{id: 1, image: "", htmlmsg: "", source:"", app_message: "" + Math.floor(Math.random() * 2)}];
    

    $scope.htmlmsg = "";
    $scope.image = "";

    $scope.startSelectValues = function()
    {
        $scope.data = {
        availableOptions: [

            {id: '1', name: 'Blog'},
            {id: '2', name: 'Apps'},
            {id: '3', name: 'Webs'},
            {id: '4', name: 'Events'},
            {id: '200', name: 'All users'}
          ],
          type: {id: '200', name: 'All users'} //This sets the default value of the select in the ui
          };
    };

    $scope.sendPush = function()
    {
      console.log("Send message");

      for (var i = 0; i < $scope.choices.length; i++)
      {
        console.log($scope.choices[i].id + " / " + $scope.choices[i].image + " / " + $scope.choices[i].htmlmsg + " / " + $scope.choices[i].source + " / " + $scope.choices[i].app_message);
      }

      console.log($scope.data.type.id);
      console.log($scope.description);
      console.log($scope.title);

      
      if ($scope.description == "")
      {
        $scope.description = "New message receive with update content";
        $scope.validation = false;
      }
      if($scope.title == "")
      {
        $scope.title = "Title required!!";
        $scope.validation = false;
      }

      if ($scope.choices[0].htmlmsg == "" || $scope.choices[0] == "")
      {
        alert("Complete first message correctly!!!");
        $scope.validation = false;
      }
      //$scope.content = 
      console.log(angular.toJson($scope.choices));

      //Prepare send data (params)
      if ($scope.validation)
      {
          var data = $.param({'type': $scope.data.type.id,
                          'description': $scope.description,
                          'title': $scope.title,
                          'messages': angular.toJson($scope.choices)});        
          var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}} 

          $http.post(LOCAL_PUSH_SERVER_URL_LOCALHOST,data,config)
          .success(function(response) {
              $scope.data = response;
              console.log($scope.data);
              $scope.startSelectValues();
              console.log("success");
              $scope.success = true;
          });
      }
     

    };

    $scope.startSelectValues();
  });
