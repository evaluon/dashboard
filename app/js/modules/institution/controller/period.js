'use strict';

angular.module('evaluon.institution').controller(
    'PeriodCtrl', function($scope, $mdDialog, groupId, Period, Auth){

        Auth.userLogged().institution;

        $scope.periodes = [];

        $scope.getPeriodes = function(){

        };

        $scope.add = function($event, group){

            Period.setPeriod(groupId, [id]).then(function(){
                $scope.getPeriodes();
            });

        };

    });
