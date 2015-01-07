'use strict';

angular.module('evaluon.evaluator').controller(
    'EvalueesCtrl', function($scope, $mdDialog, groupId, Group, toast){
        $scope.evaluees= [];
        $scope.group = groupId;
        $scope.evaluee = {
            id: ''
        }

        $scope.getEvaluees = function(){
            Group.groupEvaluees(groupId).then(function(success){
                $scope.evaluees = success;
            });
        };
        $scope.getEvaluees();


        $scope.delete = function($event, id){
            Group.deleteEvaluee(groupId, id).then(function(){
                $scope.getEvaluees();
            });
        };

        $scope.add = function($event, id){
            Group.addEvaluee(groupId, [id]).then(function(){
                $scope.evaluee.id = '';
                $scope.getEvaluees();
            })
            .catch(function(error){
                toast.show('Hubo un error agregando al evaluado');
            });
        };

    });
