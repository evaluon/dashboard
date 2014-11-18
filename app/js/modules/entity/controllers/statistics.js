'use strict';

angular.module('evaluon.entity').controller(
    'StatisticsCtrl', function($scope, Statistics){

        $scope.statistics = [];

        var getStatistics = function(){
            Statistics.evalueeList().then(function(success){
                $scope.statistics = success;
            });
        };


    });
