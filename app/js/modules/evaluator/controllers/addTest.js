'use strict';

angular.module('evaluon.evaluator').controller('AddTestCtrl',
function(
    $scope, $state, $stateParams, $q, toast, Test, Question,GroupTest, Answer
){

    var date = new Date();
    date.setMilliseconds(0);
    date.setSeconds(0);

    // Test logic
    $scope.testObject = {
        description: "",
        start_date: date,
        stop_date: date
    };
    // Yes, it is a variable for the questions
    $scope.test = [];
    $scope.knowledgeAreas = [];

    $scope.validate = function(form, test){

        var difficulty = _.reduce(test, function(prev, item){

            if(item.difficulty !== 'undefined' || idem.difficulty){
                if(item.difficulty < 1 || item.difficulty > 480) return false && prev;
                else return true && prev;
            }
            else true && prev;
        }, true);

        return test.length < 1 || form.$invalid || !difficulty;
    };

    $scope.getKnowledgeAreas = function(){

        Question.listKnowledgeAreas().then(function(success){
            $scope.knowledgeAreas = success;
        }).catch(function(response){
            toast.show(response.error);
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
            toast.show(
                "Examen creado satisfactoriamente. Recuerde que este" +
                "examen aparecerá a sus estudiantes una vez se encuentre " +
                "en las fechas de realización del mismo"
            );
            $state.go('evaluator.test', { id: $stateParams.id });
        }).catch(function(response){
            toast.show(response.error);
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
