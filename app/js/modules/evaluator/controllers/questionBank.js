'use strict';

angular.module('evaluon.evaluator').controller(
    'QuestionBankCtrl', function($scope, Question){

        $scope.questionBank = [];
        $scope.knowledgeAreas = [];

        $scope.getQuestionBank = function(){
            Question.listBank().then(function(success){
                $scope.questionBank = success;
            });
        };

        $scope.getKnowledgeAreas = function(){
            Question.listKnowledgeAreas().then(function(success){
                $scope.knowledgeAreas = success;
            }).catch(function(error){
                console.error(error);
            });
        };

        $scope.getKnowledgeAreas();
        $scope.getQuestionBank();

    }
);
