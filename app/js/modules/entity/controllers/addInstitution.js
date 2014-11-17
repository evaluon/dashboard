'use strict';

angular.module('evaluon.entity').controller(
    'AddInstitutionCtrl', function($scope, $mdDialog, Institution){

        $scope.file = {};
        $scope.institution = {
            id: '',
            name: '',
            address: '',
            mail: '',
            phone_number: '',
            description: ''
        };

        $scope.onFile = function($file){
            $scope.file = $file[0];
        };

        $scope.send = function(){
            Institution.createInstitution(
                $scope.institution, $scope.file
            ).then(function(data){
                $mdDialog.hide(data);
            });
        }

    }
);
