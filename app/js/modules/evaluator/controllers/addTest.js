'use strict';

angular.module('evaluon.evaluator').controller('AddTestCtrl',
function($scope, $state, $stateParams, $q, Test, Question, GroupTest, Answer){

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
        stop_date: new Date()
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
        $scope.test.splice(index - 1, 1);
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

        Test.createTest($scope.testObject).then(function(test){
            $scope.testObject = test;
            return GroupTest.addTest(
                $stateParams.id, test.id
            ).then(function(){
                return test;
            });
        }).then(function(test){

            var qs = [];

            for(var i = 0; i < $scope.test.length; i++){

                var question = $scope.test[i];

                console.log(i, question);

                qs.push(

                    Question.createQuestion({
                        institution_id: $stateParams.id,
                        open: question.open || false,
                        public: question.public || false,
                        description_text: question.description,
                        knowledge_area_id: question.knowledgeArea.id || null,
                        difficulty: question.difficulty || 1
                    }).then(function(createdQuestion){

                        if(question.image.location){
                            return Question.uploadQuestionImage(
                                createdQuestion.id, question.image
                            ).then(function(){
                                return createdQuestion;
                            });
                        } else {
                            return createdQuestion;
                        }

                    }).then(function(createdQuestion){

                        return Test.addQuestion(
                            test.id, createdQuestion.id
                        ).then(function(){
                            return createdQuestion;
                        });

                    }).then(function(createdQuestion){

                        var answers = question.questions;

                        return Answer.registerAnswers(
                            answers
                        ).then(function(answers){

                            var ao = [];

                            for(var i = 0; i < answers.length; i++){
                                ao.push(
                                    Answer.addToQuestion(
                                        createdQuestion.id, answers[i]
                                    )
                                )
                            }

                            return $q.all(ao);

                        });

                    }).then(function(){
                        $state.go('evaluator.test', { id: $stateParams.id });
                    }).catch(function(error){
                        console.log(error);
                    })

                );

            }

            return $q.all(qs);

        });

    };

});
