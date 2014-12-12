'use strict';

angular.module('evaluon.institution').controller(
    'InstitutionCtrl', function($scope,$mdDialog, Evaluator){

        $scope.evaluators = [];

        $scope.getEvaluators = function(){
            Evaluator.evaluatorList().then(function(evaluators){
                $scope.evaluators = evaluators;
            }).catch(function(error){
                console.error(error);
            });
        };

        $scope.getEvaluators()

        $scope.period = function($event, groupId){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/institution/period.tpl.html',
                controller: 'PeriodCtrl',
                onComplete: $scope.getEvaluators(),
                locals: { groupId: groupId }
            });
        };

    }
);
