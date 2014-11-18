'use strict';

angular.module('evaluon.evaluator').controller(
    'EvaluatorCtrl', function($scope, Evaluator){

        $scope.evaluators = [];

        function getEvaluators(){
            Evaluator.evaluatorList().then(function(evaluators){
                console.log(evaluators);
                $scope.evaluators = evaluators;
            });
        }

    }
);
