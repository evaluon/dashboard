'use strict';

angular.module('evaluon.institution').controller('AddEvaluatorCtrl',
function(Institution, User, Auth, Evaluator, Group, $scope, $mdDialog){

    $scope.group = {
        evaluator_id: '',
        institution_id: Auth.userLogged().institution
    };

    $scope.addExisting = function($event){
        $event.preventDefault();

        Group.addGroup($scope.group).then(function(){
            $mdDialog.hide({ success: true });
        }).catch(function(error){
            $mdDialog.hide(error);
        })

    }

});
