'use strict';

angular.module('evaluon.entity').controller(
    'EntityCtrl', function($scope, Institution){

        Institution.listInstitutions().then(function(institutions){
            $scope.institutions = institutions;
        });

    }
);
