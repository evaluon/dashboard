'use strict';

angular.module('evaluon.institution').controller('GroupByEvaluatorCtrl',
    function($scope, $stateParams, $mdDialog, toast, Group){

        $scope.groups = [];

        $scope.getGroups = function(){

            Group.institutionGroups($stateParams.id).then(function(groups){
                $scope.groups = groups;
            }).catch(function(response){
                console.log(response);
                toast.show(response.error);
            });

        };

        $scope.addGroup = function($event){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/institution/addGroup.tpl.html',
                controller: 'AddGroupCtrl',
                onComplete: $scope.getGroups(),
                locals: { id: $stateParams.id }
            });
        };

        $scope.getGroups();

    }
);
