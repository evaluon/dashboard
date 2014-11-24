'use strict';

angular.module('evaluon.institution').controller(
    'AddQuestionBankCtrl', function($scope, $mdDialog){
        $scope.question;
        ($scope);
        $scope.add = function(){
            $mdDialog.hide($scope.question);
        };
    }
);
