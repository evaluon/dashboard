'use strict';

angular.module('evaluon.institution').controller(
    'InstitutionGroupCtrl', function($scope, Group, Institution){

        $scope.groups = [];

        $scope.getGroups = function(){

            Institution.activeInstitution().then(function(institutionId){
                return Group.institutionGroups(institutionId);
            }).then(function(groups){
                $scope.groups = groups;
            });

        }

        $scope.getGroups();

    }
);
