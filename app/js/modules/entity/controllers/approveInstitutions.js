'use strict';

angular.module('evaluon.entity').controller(
    'ApproveInstitutionsCtrl', function($scope, Institution, toast){

        $scope.institutions = [];

        $scope.getInstitutions = function(){

            Institution.unapprovedInstitutions().then(function(success){
                $scope.institutions = success;
            });

        };

        $scope.approve = function(id){

            Institution.approveInstitution(id).then(function(){
                return $scope.getInstitutions();
            }).then(function(){
                toast.show("La institución ha sido aprobada correctamente");
            }).catch(function(response){
                toast.show(response.error);
            });

        };

        $scope.reject = function(id, reason){

            Institution.denyInstitution(id, reason).then(function(){
                return $scope.getInstitutions();
            }).then(function(){
                toast.show("La institución ha sido denegada correctamente");
            }).catch(function(response){
                toast.show(response.error);
            });

        };

        $scope.getInstitutions();

    }
);
