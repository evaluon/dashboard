'use strict';

angular.module('evaluon.institution').controller(
    'PeriodCtrl', function($scope, $mdDialog, groupId, Period){

        $scope.add = function($event, group){
            console.log(group);
            Period.setPeriod(groupId, [id]).then(function(){
                $scope.getEvaluees();
            });
        };

    });
