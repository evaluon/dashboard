'use strict';

angular.module('evaluon.evaluator').controller(
    'AddTestCtrl', function($scope, $stateParams, $q, Test, Question){

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
        $scope.testObject = {
            description: "Una nueva pregunta",
            start_date: new Date(),
            end_date: new Date()
        };
        $scope.test = [];

        $scope.addOpenQuestion = function(){
            var openQuestion = {
                open: true
            };
            $scope.test.push(openQuestion);
        };

        $scope.addCloseQuestion = function(){
            var closeQuestion = {
                open: false,
                new: true,
                questions: [
                { right: true },
                { right: false },
                { right: false },
                { right: false }
                ]
            };
            $scope.test.push(closeQuestion);
        };

        $scope.addQuestionBank = function(){

            var questionBank = {
                public: true
            };

            $scope.test.push(questionBank);
        };

        $scope.deleteQuestion = function(index){
            $scope.test.splice(index -1 ,1);
        };

        //Images
        $scope.onImage = function(question, $file){

            question.image = {
                location: $file[0],
                description: ''
            };

        };

        $scope.deleteImage = function(question){
            delete question.image;
        };

        //Add test
        $scope.addTest = function(){

            Test.createTest(testObject).then(function(test){
                $scope.testObject = test;
                return GroupTest.addTest($stateParams.id, test.id);
            }).then(function(data){

            });

        };

    });
