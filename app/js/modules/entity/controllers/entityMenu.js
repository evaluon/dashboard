'use strict';

angular.module('evaluon.institution').controller(
    'EntityMenuCtrl', function($scope, $mdDialog, Evaluator){

        $scope.addUser = function($event){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/entity/addEntityUser.tpl.html',
                controller: 'AddEntityUserCtrl',
                escapeToClose: true
            });
        };
    }
);
