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
        $scope.questionType = {
            open: 1,
            close: 2,
            bank: 3
        };

        $scope.addOpenQuestion = function(){
            var openQuestion = {
                type: $scope.questionType['open']
            };

            $scope.test.push(openQuestion);
        };

        $scope.addCloseQuestion = function(){
            var closeQuestion = {
                type: $scope.questionType['close']
            };
            $scope.test.push(closeQuestion);
        };

        $scope.addQuestionBank = function(){

        };
    });
