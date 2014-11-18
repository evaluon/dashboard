'use strict';

angular.module('evaluon.entity').controller(
    'StatisticsCtrl', function($scope, Statistics, $timeout){

        $scope.statistics = [];

        $scope.getStatistics = function(){
            Statistics.evalueeList().then(function(success){
                $scope.statistics = success;
                $scope.setUsersLevelsData();
            });
        };

        $scope.getStatistics();

        function sampleData() {
          var better = 20;
          return [
            {
              key: "hola",
              val: 100 - better
            }, {
              key: "Same",
              val: better / 4
            }, {
              key: "Better",
              val: better * 3 / 4
            },
          ];
        }

        $scope.getData = function(){
            $scope.data = sampleData();
        }

        $scope.getDisabilityData = function(){
            return [
                {
                    key: "hola"
                }
            ]
        };

        $scope.data = sampleData();
        $scope.fixedData = sampleData();

        //Line
        $scope.setUsersLevelsData = function(){
            $scope.usersLevelsData= [
              {
                'key': 'Nivel general de usuarios',
                'color': '#4f99b4',
                'values' : _.map($scope.statistics, function(user){ return {label: user.first_name, value: user.average  }})
              }
            ];

            console.log($scope.usersLevelsData);
        };

        $scope.usersLevelsData = [];


        //Bar

    });
