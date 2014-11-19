'use strict';

angular.module('evaluon.evaluator').controller(
    'AddTestCtrl', function($scope, Question){

        $scope.knowledgeAreas = [];

        $scope.getKnowledgeAreas = function(){
            Question.listKnowledgeAreas().then(function(success){
                $scope.knowledgeAreas = success;
                console.log(success);
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
                type: $scope.questionType['close'],
                questions: [{},{},{},{}]
            };
            $scope.test.push(closeQuestion);
        };

        $scope.addQuestionBank = function(){

            var questionBank = {
                type: $scope.questionType['bank']
            };

            $scope.test.push(questionBank);
        };

        $scope.deleteQuestion = function(index){
            $scope.test.splice(index -1 ,1);
        };

        //Images
        $scope.onImage = function(question, $file){

            question.img = {
                img: $file[0],
                description: ''
            };

        };

        $scope.deleteImage = function(question){
            delete question.img;
        };

        //Add test
        $scope.addTest = function(){
            console.log($scope.test);
        };
    });
