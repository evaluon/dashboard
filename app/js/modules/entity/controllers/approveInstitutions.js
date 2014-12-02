'use strict';

angular.module('evaluon.entity').controller(
    'ApproveInstitutionsCtrl', function($scope, Institution){

        $scope.institutions = [];

        $scope.getInstitutions = function(){
            Institution.unapprovedInstitutions().then(function(success){
                console.log(success);
                $scope.institutions = success;
            });
        };

        $scope.getInstitutions();

    });
