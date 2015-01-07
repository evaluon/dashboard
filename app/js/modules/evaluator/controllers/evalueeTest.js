'use strict';

angular.module('evaluon.evaluator').controller(
    'EvalueeTestCtrl', function($scope, $stateParams, $state, Test){

        $scope.groupId = $stateParams.group;
        $scope.testId = $stateParams.id;

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
                        "Fecha de nacimiento": evaluee.birth_date,
                        "Correo Electrónico": evaluee.mail,
                        "Número Telefónico": evaluee.phone_number,
                        "Fecha de Registro": evaluee.register_date,
                        "Tipo de discapacidad": evaluee.disability,
                        "Tipo de usuario": evaluee.type,
                        "Nivel de estudios": evaluee.level,
                        "Sexo": (evaluee.gender == "male" ? "Hombre" : "Mujer"),
                        "Nota": evaluee.average,
                        "Calificado": (evaluee.checked ? "Si" : "No")
                    }
                });
                if($scope.evaluees.length > 0) $scope.headers = Object.keys($scope.evaluees[0]);
            }).catch(function(error){
                console.error(error);
            });
        };

        $scope.getEvaluees();
    }
);
