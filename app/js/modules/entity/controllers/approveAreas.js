'use strict';

angular.module('evaluon.entity').controller(
    'AddInstitutionCtrl', function($scope, $mdDialog){

        $scope.file = {};
        $scope.area = {
            id: '',
            name: '',
            description: ''
        };

        $scope.onFile = function($file){
            $scope.file = $file[0];
        };

        $scope.send = function(){

        };

    }
);
