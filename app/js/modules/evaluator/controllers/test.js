'use strict';

angular.module('evaluon.evaluator').controller(
    'TestCtrl', function($scope, $stateParams, $mdDialog, $state, GroupTest){

        $scope.includeInstitution = $state.includes('institution.test');
        $scope.includeEvaluator = $state.includes('evaluator.test');

        $scope.groupId = $stateParams.id;
        $scope.institutionId = $stateParams.institution;
        $scope.tests = [];

        $scope.getTests = function(){
            GroupTest.groupTests($stateParams.id).then(function(success){
                $scope.tests = success;
            });
        };

        $scope.uptadeTestPeriod = function($event, item){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/evaluator/updateTestPeriod.tpl.html',
                controller: 'InstitutionUpdateTestPeriodCtrl',
                escapeToClose: true,
                locals: { item: item}
            });
        };

        $scope.getTests();

    }
);
