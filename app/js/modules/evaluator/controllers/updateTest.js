'use strict';

angular.module('evaluon.evaluator').controller(
    'UpdateTestCtrl', function($q, $scope, $state, Question, Answer, toast){

        $scope.test = {};
        $scope.params = $state.params;

        $scope.updateQuetion = function(question){ /* jshint camelcase: false */
            console.log(question);
            var qs = [];

            for(var answer in question.answers){
                answer = question.answers[answer];

                qs.push(Answer.editAnswer(
                    answer.id, {
                        description_text: answer.description_text,
                        right: answer.right
                    }
                ));

            }

            Question.editQuestion(question.id, {
                description_text: question.description_text
            }).then(function(){
                return $q.all(qs);
            }).then(function(){
                toast.show('Pregunta editada exitosamente');
            });


        };


        function getTest(){
            Question.getList($scope.params.test).then(function(data){
                console.log(data);
                $scope.test = data;
            });
        }

        getTest();

    });
