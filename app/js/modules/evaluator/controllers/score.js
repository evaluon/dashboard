'use strict';

angular.module('evaluon.evaluator').controller(
    'ScoreTestCtrl', function($scope, $stateParams, Test){

        $scope.getResults = function(){

            Test.testResults(
                $stateParams.id, $stateParams.evalueeId
            ).then(function(test){
                $scope.test = test;
            });

        }

        $scope.getResults();

});
