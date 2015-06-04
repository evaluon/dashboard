'use strict';

angular.module('evaluon.evaluator').controller(
    'UpdateTestCtrl', function($scope, $state, Question){

        var testId = $state.params.test;

        $scope.test = {};
        $scope.params = $state.params;

        getTest();

        $scope.updateQuetion = function(question){
            console.log(question);
        };


        function getTest(){
            Question.getList($scope.params.test).then(function(data){
                console.log(data);
                $scope.test = data;
            });
        }

    });
