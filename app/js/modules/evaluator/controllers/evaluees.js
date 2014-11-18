'use strict';

angular.module('evaluon.evaluator').controller(
    'EvalueesCtrl', function($scope, groupId, Group){
        $scope.evaluees= [];
        $scope.group = groupId;

        $scope.getEvaluees = function(){
            Group.groupEvaluees(groupId).then(function(success){
                $scope.evaluees = success;
            });
        };
        $scope.getEvaluees();


        $scope.delete = function($event, id){
            console.log(id);
        };

        $scope.add = function($event, id){
            Group.addEvaluee(groupId, [id]).then(function(success){
                $scope.getEvaluees();
            });
        };

    });
