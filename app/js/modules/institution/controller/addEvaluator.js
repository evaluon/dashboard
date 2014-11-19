'use strict';

angular.module('evaluon.institution').controller('AddEvaluatorCtrl',
function(Institution, User, Auth, Evaluator, Group, $scope, $mdDialog){

    $scope.user = {
        id: '',
        first_name: '',
        last_name: '',

        mail: '',
        phone_number: '',

        password: ''
    };

    $scope.evaluator = {
        area: ''
    };

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
            console.error(error);
            $mdDialog.hide(error);
        })

    }

    $scope.registerNew = function($event){
        $event.preventDefault();

        $mdDialog.hide({ success: false });
    };

});
