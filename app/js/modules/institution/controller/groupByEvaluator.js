'use strict';

angular.module('evaluon.institution').controller(
    'GroupByEvaluatorCtrl', function($scope, $stateParams, $mdDialog, Group){

        $scope.groups = [];

        $scope.getGroups = function(){

            Group.evaluatorGroups($stateParams.id).then(function(institutionId){
                return Group.institutionGroups(institutionId);
            }).then(function(groups){
                $scope.groups = groups;
            });

        };

        $scope.getGroups();

        $scope.addGroup = function($event){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/institution/addGroup.tpl.html',
                controller: 'AddGroupCtrl',
                onComplete: $scope.getGroups(),
                locals: { id: $stateParams.id}
            });
        };
    }
);
