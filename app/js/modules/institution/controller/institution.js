'use strict';

angular.module('evaluon.institution').controller(
    'InstitutionCtrl', function($scope, Evaluator){

        $scope.evaluators = [];

        function getEvaluators(){
            Evaluator.evaluatorList().then(function(evaluators){
                console.log(evaluators);
                $scope.evaluators = evaluators;
            }).catch(function(error){
                console.error(error);
            });
        }

        getEvaluators();

    }
);
