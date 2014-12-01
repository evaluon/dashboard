'use strict';

angular.module('evaluon.evaluator').controller('AddTestCtrl',
function(
    $scope, $state, $stateParams, $q, $mdToast, Test, Question,
    GroupTest, Answer
){

    console.log($stateParams);

    // Test logic
    $scope.testObject = {
        description: "",
        start_date: new Date(),
        stop_date: new Date()
    };
    // Yes, it is a variable for the questions
    $scope.test = [];
    $scope.knowledgeAreas = [];

    function mdToast(message){

        $mdToast.show({
            template: '<md-toast>{0}</md-toast>'.format(message),
            hideDelay: 6000,
            position: 'bottom left'
        });

    }

    $scope.getKnowledgeAreas = function(){

        Question.listKnowledgeAreas().then(function(success){
            $scope.knowledgeAreas = success;
        }).catch(function(error){
            console.error(error);
        });

    };

    $scope.addOpenQuestion = function(){

        var openQuestion = {
            open: true,
            new: true,
            // Yes, the answers are called questions
            questions: []
        };

        $scope.test.push(openQuestion);

    };

    $scope.addCloseQuestion = function(){

        var closeQuestion = {
            open: false,
            new: true,
            // Yes, the answers are called questions
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

        $scope.test.splice(index, 1);

    };

    // Adding Images
    $scope.onImage = function(question, $file){

        question.image = {
            location: $file[0],
            description: ''
        };

    };

    $scope.deleteImage = function(question){
        delete question.image;
    };

    // Add test
    $scope.addTest = function($event){
        $event.preventDefault();

        var test = _.omit($scope.testObject, 'id');

        Test.createTest(test).then($scope.addToGroup).then(function(test){

            var qs = [];

            for(var i = 0; i < $scope.test.length; i++){

                var question = $scope.test[i];

                if(question.new){
                    $scope.addNewQuestion(qs, test, question);
                } else {
                    qs.push(Test.addQuestion(test.id, question.id));
                }

            }

            return $q.all(qs);

        }).then(function(){
            mdToast("Examen creado satisfactoriamente");
            $state.go('evaluator.test', { id: $stateParams.id });
        }).catch(function(response){
            mdToast(response.error);
        });

    };

    $scope.addToGroup = function(test){

        $scope.testObject = test;
        return GroupTest.addTest($stateParams.id, test.id).then(function(){
            return test;
        });

    }

    $scope.addNewQuestion = function(qs, test, question){

        var _question = {
            institution_id: $stateParams.institution,
            open: question.open,
            public: question.public || false,
            description_text: question.description,
            knowledge_area_id: question.knowledgeArea.id || null,
            difficulty: question.difficulty || 1
        };

        qs.push(
            Question.createQuestion(_question).then(function(_question){
                return $scope.uploadImage(question, _question);
            }).then(function(_question){

                return Test.addQuestion(test.id, _question.id).then(function(){
                    return _question;
                });

            }).then(function(_question){
                return $scope.registerAnswers(question, _question);
            })
        );

    }

    $scope.uploadImage = function(question, _question){

        if(question.image){
            return Question.uploadQuestionImage(
                _question.id, question.image
            ).then(function(){
                return _question;
            });
        } else {
            return _question;
        }

    }

    $scope.registerAnswers = function(question, _question){

        var answers = _.shuffle(question.questions);

        return Answer.registerAnswers(answers).then(function(answers){

            var ao = [];

            for(var i = 0; i < answers.length; i++){
                ao.push(Answer.addToQuestion(_question.id, answers[i]));
            }

            return $q.all(ao);

        });

    }

    $scope.getKnowledgeAreas();

});
