'use strict';

angular.module('evaluon.evaluator').controller(
    'EvaluatorCtrl', function($scope, $mdDialog, $mdToast, Group, Period){

        function mdToast(message) {
            $mdToast.show({
                template: '<md-toast>{0}</md-toast>'.format(message),
                hideDelay: 6000,
                position: 'top right'
            });
        }

        $scope.groups = [];

        $scope.getGroups = function(){
            return Group.evaluatorGroups().then(function(groups){
                $scope.groups = groups;
            }).catch(function(error){
                mdToast(error);
            });
        }

        $scope.getGroups();

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
                mdToast("Periodo establecido");
            }).catch(function(error){
                mdToast("Ya existe un periodo activo que está establecido");
            });

            /*
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/evaluator/periode.tpl.html',
                controller: 'PeriodCtrl',
                onComplete: $scope.getGroups(),
                locals: { groupId: groupId }
            });
            */

        };
        
    }
);
