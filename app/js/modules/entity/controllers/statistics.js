'use strict';

angular.module('evaluon.entity').controller(
    'StatisticsCtrl', function($scope, Statistics, $timeout){

        $scope.statistics = [];
        $scope.evalueeDescription = {};

        $scope.getStatisticsData = function(){
            Statistics.evalueeDescription().then(function(success){
                $scope.evalueeDescription = success;
                $scope.setDisabilityData();
                $scope.setTypeData();
            });
            Statistics.evalueeList().then(function(success){
                $scope.statistics = success;
                $scope.setUsersLevelsData();
                $scope.setUsersLevelsDataByGender();
                $scope.setDisabilityData();
                $scope.setTypeData();
            });
        };

        $scope.getStatisticsData();

        //Pies
        $scope.disabilityData = [{key: '', value: 100}];
        $scope.typeData = [{key: '', value: 100}];

        $scope.setDisabilityData = function(){
            var total = $scope.statistics.length;
            var data = [];

            _.each($scope.evalueeDescription.disabilities, function(obj){
                var val = _.where($scope.statistics, {disability_id : obj.id}).length;
                data.push({key: obj.description, val: val, percent: (val/total)*100});
            });

            $scope.disabilityData = data;
        };

        $scope.setTypeData = function(){
            var total = $scope.statistics.length;
            var data = [];

            _.each($scope.evalueeDescription.types, function(obj){
                var val = _.where($scope.statistics, {type_id : obj.id}).length;
                data.push({key: obj.description, val: val, percent: (val/total)*100});
            });

            $scope.typeData = data;
        };

        //Bars
        $scope.usersLevelsData = [];
        $scope.usersLevelsDataByGender = [];

        $scope.setUsersLevelsData = function(){
            var value =  _.map($scope.statistics, function(user){ return {label: user.first_name, value: user.average }});
            $scope.usersLevelsData= [
              {
                'key': 'Usuario',
                'color': '#4f99b4',
                'values' : _.sortBy(value, function(o){ return o.value; }).reverse()
              }
            ];
        };

        $scope.setUsersLevelsDataByGender = function(){
            var woman = _.where($scope.statistics, {gender_id : 2});
            var womanValue =  _.map(woman, function(user){ return {label: user.first_name, value: user.average }});
            var man = _.where($scope.statistics, {gender_id : 1});
            var manValue =  _.map(man, function(user){ return {label: user.first_name, value: user.average }});
            $scope.usersLevelsDataByGender= [
                {
                'key': 'Hombres',
                'color': '#4DB6AC',
                'values' : _.sortBy(manValue, function(o){ return o.value; }).reverse()
                },
                {
                'key': 'Mujeres',
                'color': '#F06292',
                'values' : _.sortBy(womanValue, function(o){ return o.value; }).reverse()
                }
            ];
        };

    });
