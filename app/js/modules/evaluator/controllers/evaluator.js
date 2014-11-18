'use strict';

angular.module('evaluon.evaluator').controller(
    'EvaluatorCtrl', function($scope, Group){

        $scope.groups = [];

        function getGroups(){
            return Group.evaluatorGroups().then(function(groups){
                $scope.groups = groups;
            }).catch(function(error){
                console.error(error);
            });
        }

    }
);
