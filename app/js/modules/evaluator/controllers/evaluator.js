'use strict';

angular.module('evaluon.evaluator').controller(
    'EvaluatorCtrl', function($scope, $mdDialog, toast, Group, Period){

        $scope.groups = [];

        $scope.getGroups = function(){
            return Group.evaluatorGroups().then(function(groups){
                $scope.groups = groups;
            }).catch(function(error){
                toast.show(error.message);
            });
        }

        $scope.evaluees = function($event, groupId){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/evaluator/evaluees.tpl.html',
                controller: 'EvalueesCtrl',
                onComplete: $scope.getGroups(),
                locals: { groupId: groupId }
            });
        };

        $scope.period = function($event, groupId){

            Period.setPeriod(groupId).then(function(success){
                toast.show("Periodo establecido");
            }).catch(function(error){
                toast.show("Ya existe un periodo activo establecido");
            });

        };

        $scope.getGroups();

    }
);
