'use strict';

angular.module('evaluon.evaluator').controller(
    'EvalueeTestCtrl', function($scope, $stateParams, $state, Test, $filter){

        $scope.groupId = $stateParams.group;
        $scope.testId = $stateParams.id;
        $scope.params = $stateParams;

        $scope.inInstitution = $state.includes('institution');
        $scope.inEvaluator= $state.includes('evaluator');

        $scope.evaluees = [];
        $scope.evaluees_es = [];
        $scope.headers = [];


        $scope.getEvaluees = function(){
            Test.evalueesInTest(
                $scope.groupId, $scope.testId
            ).then(function(success){
                $scope.evaluees = success;
                $scope.evaluees_es = _.map(success, function(evaluee){
                    return {
                        id: evaluee.id,
                        "Primer nombre": evaluee.first_name,
                        "Segundo nombre": evaluee.middle_name,
                        "Apellidos": evaluee.last_name,
                        "Tipo de discapacidad": evaluee.disability,
                        "Nota": $filter('number')(evaluee.average, 2),
                        "Calificado": (evaluee.checked ? "Si" : "No")
                    };
                });
                if($scope.evaluees.length > 0) {
                    $scope.headers = Object.keys($scope.evaluees_es[0]);
                }
            }).catch(function(error){
                console.error(error);
            });
        };

        $scope.getEvaluees();
    }
);
