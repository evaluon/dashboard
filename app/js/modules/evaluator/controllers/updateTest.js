'use strict';

angular.module('evaluon.evaluator').controller(
    'UpdateTestCtrl', function($q, $scope, $state, Question, Answer, toast){

        $scope.test = {};
        $scope.params = $state.params;

        $scope.updateQuetion = function(question){
            console.log(question);
            var qs = [];

            for(var answer in question.answers){

                (function(answer){
                    qs.push(Answer.editAnswer(
                        answer.id, {
                            description_text: answer.description_text,
                            right: answer.right
                        }
                    ));
                })(question.answers[answer]);

            }

            $q.all(qs).then(function(){
                console.log("Cool");
            }, function(err){
                toast.show(err);
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
