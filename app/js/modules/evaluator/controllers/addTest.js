'use strict';

angular.module('evaluon.evaluator').controller(
    'AddTestCtrl', function($scope, Question){

        $scope.knowledgeAreas = [];

        $scope.getKnowledgeAreas = function(){
            Question.listKnowledgeAreas().then(function(success){
                $scope.knowledgeAreas = success;
                console.log($scope.knowledgeAreas);
            }).catch(function(error){
                console.error(error);
            });
        };

        $scope.getKnowledgeAreas();

        //Test logic
        $scope.test = [];
    });
