'use strict';

angular.module('evaluon.auth').controller(
    'RegistryCtrl', function($scope){

        $scope.onFile = function($file){
            $scope.file = $file[0];
        };

        $scope.registerInstitution = function(event){
            event.preventDefault();
        };

        $scope.registerEvaluator = function(event){
            event.preventDefault();



        };

    }
);
