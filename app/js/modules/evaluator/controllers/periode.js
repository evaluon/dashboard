'use strict';

angular.module('evaluon.evaluator').controller(
    'PeriodeCtrl', function($scope, $mdDialog, groupId, Group){

        $scope.add = function($event, id){
            Group.addEvaluee(groupId, [id]).then(function(){
                $scope.getEvaluees();
            });
        };

    });
