'use strict';

angular.module('evaluon.entity').controller(
    'EntityCtrl', function($scope, $upload, Institution){

        Institution.listInstitutions().then(function(institutions){
            $scope.institutions = institutions;
        });

        $scope.institution = {
            id: '',
            name: '',
            address: '',
            phone_number: '',
            image: {
                description: ''
            }
        };

        

    }
);
