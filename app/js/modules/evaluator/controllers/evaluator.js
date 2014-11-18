'use strict';

angular.module('evaluon.evaluator').controller(
    'EvaluatorCtrl', function($scope, $mdDialog, Group, Period){

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

        $scope.periode= function($event, groupId){
            Period.setPeriod(groupId).then(function(success){
                alert('Periodo seleccionado');
            });
            /*
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/evaluator/periode.tpl.html',
                controller: 'PeriodeCtrl',
                onComplete: $scope.getGroups(),
                locals: { groupId: groupId }
            });*/
        };
    }
);
