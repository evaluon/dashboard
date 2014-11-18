'use strict';

angular.module('evaluon.evaluator').controller(
    'EvaluatorCtrl', function($scope, $mdDialog, Group){

        $scope.groups = [];

        $scope.getGroups = function(){
            return Group.evaluatorGroups().then(function(groups){
                $scope.groups = groups;
            }).catch(function(error){
                console.error(error);
            });
        }

        $scope.getGroups();

        $scope.evaluees= function($event, groupId){

            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/evaluator/evaluees.tpl.html',
                controller: 'EvalueesCtrl',
                onComplete: $scope.getGroups(),
                locals: { groupId: groupId }
            });
        };
    }
);
