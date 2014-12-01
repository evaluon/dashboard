'use strict';

angular.module('evaluon.evaluator').controller(
    'ScoreTestCtrl', function($scope, $stateParams, Test, Answer){

        $scope.test = [];

        $scope.getResults = function(){

            Test.testResults(
                $stateParams.id, $stateParams.evalueeId
            ).then(function(test){
                $scope.test = test;
            });

        };

        $scope.calificate = function(id, value){
            Answer.score(id, value).then(function(){
                $scope.getResults();
            });
        };

        $scope.setFeedback = function(feedback){
            Test.feedback($stateParams.evalueeId, $stateParams.id, feedback).then(function(){
                $scope.getResults();
            });
        };

        $scope.getResults();

});
