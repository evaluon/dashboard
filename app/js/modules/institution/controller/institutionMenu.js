'use strict';

angular.module('evaluon.institution').controller(
    'InstitutionMenuCtrl', function($scope, $mdDialog, Evaluator){

        $scope.addArea = function($event){

            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/institution/addArea.tpl.html',
                controller: 'AddAreaCtrl',
                escapeToClose: true
            });
        };
    }
);
