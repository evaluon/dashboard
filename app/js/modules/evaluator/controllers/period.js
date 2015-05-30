'use strict';

angular.module('evaluon.evaluator').controller(
    'PeriodCtrl', function($scope, $mdDialog, groupId, Period){

        $scope.add = function($event, group){
            Period.setPeriod(groupId, [id]).then(function(){
                $scope.getEvaluees();
            });

        };

    });
