'use strict';

angular.module('evaluon.evaluator').controller(
    'ScoreTestCtrl', function($scope, $stateParams, Test){

        $scope.test = [];

        $scope.getResults = function(){

            Test.testResults(
                $stateParams.id, $stateParams.evalueeId
            ).then(function(test){
                $scope.test = test;
            });

        };

        $scope.getResults();

        $scope.calificate = function(id, value){
            console.log(id);
            console.log(value);
        };

});
