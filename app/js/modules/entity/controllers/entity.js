'use strict';

angular.module('evaluon.entity').controller(
    'EntityCtrl', function($scope, $mdDialog, Institution){

        $scope.institutions = [];

        var getInstitutions = function(){
            Institution.listInstitutions().then(function(institutions){
                $scope.institutions = institutions.data;
            });
        };

        getInstitutions();



    }
);
