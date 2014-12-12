'use strict';

angular.module('evaluon.entity').controller(
    'ApproveAreasCtrl', function($scope, toast, Question){

        $scope.areas = [];

        $scope.approve = function(id){
            Question.approveKnowledgeArea(id).then(function(){
                toast.showSuccess();
                $scope.listAreas();
            });
        };

        $scope.reject = function(id, reason){
            Question.denyKnowledgeArea(id, reason).then(function(){
                toast.showSuccess();
                $scope.listAreas();
            });
        };

        $scope.listAreas = function(){
            Question.listKnowledgeAreas(true).then(function(areas){
                $scope.areas = areas;
            });
        };

        $scope.listAreas();

    }
);
