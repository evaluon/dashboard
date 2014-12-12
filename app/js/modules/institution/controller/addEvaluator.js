'use strict';

angular.module('evaluon.institution').controller('AddEvaluatorCtrl',
function(Institution, User, Auth, Evaluator, Group, $scope, $mdDialog){

    Institution.activeInstitution().then(function(institution){
        $scope.group = {
            evaluator_id: '',
            institution_id: institution
        };
    });

    $scope.addExisting = function($event){
        $event.preventDefault();

        Group.addGroup($scope.group).then(function(){
            $mdDialog.hide({ success: true });
        }).catch(function(error){
            $mdDialog.hide(error);
        })

    }

});
