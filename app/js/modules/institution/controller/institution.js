'use strict';

angular.module('evaluon.institution').controller(
    'InstitutionCtrl', function($scope, Evaluator){

        $scope.evaluators = [];

        $scope.getEvaluators = function(){
            Evaluator.evaluatorList().then(function(evaluators){
                $scope.evaluators = evaluators;
            }).catch(function(error){
                console.error(error);
            });
        }

        $scope.getEvaluators();

    }
);
