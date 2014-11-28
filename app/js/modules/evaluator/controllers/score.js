'use strict';

angular.module('evaluon.evaluator').controller(
    'ScoreTestCtrl', function($scope, $stateParams, Test){

        console.log($stateParams);

        Test.testResults(
            $stateParams.id, $stateParams.evalueeId
        ).then(function(test){
            console.log(test);
            $scope.test = test;
        });

});
