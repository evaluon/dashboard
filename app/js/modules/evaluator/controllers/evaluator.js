'use strict';

angular.module('evaluon.evaluator').controller(
    'EvaluatorCtrl', function($scope, Group){

        $scope.groups = [];

        $scope.getGroups = function(){
            return Group.evaluatorGroups().then(function(groups){
                $scope.groups = groups;
            }).catch(function(error){
                console.error(error);
            });
        }

        $scope.getGroups();

    }
);
