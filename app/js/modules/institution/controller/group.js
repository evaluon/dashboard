'use strict';

angular.module('evaluon.institution').controller(
    'InstitutionGroupCtrl', function($scope, $mdDialog, Group, Institution){

        $scope.groups = [];

        $scope.getGroups = function(){

            Institution.activeInstitution().then(function(institutionId){
                return Group.institutionGroups(institutionId);
            }).then(function(groups){
                $scope.groups = groups;
            });

        };

        $scope.addEvaluator= function($event){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/institution/addEvaluator.tpl.html',
                controller: 'AddEvaluatorCtrl',
                onComplete: $scope.getGroups()
            });
        };

        $scope.getGroups();

    }
);
