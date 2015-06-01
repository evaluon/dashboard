'use strict';

angular.module('evaluon.evaluator').controller(
    'TestCtrl', function(
        $scope, $stateParams, $mdDialog, $state, GroupTest, toast, $timeout
        ){

        $scope.includeInstitution = $state.includes('institution.test');
        $scope.includeEvaluator = $state.includes('evaluator.test');

        $scope.groupId = $stateParams.id;
        $scope.institutionId = $stateParams.institution;
        $scope.tests = [];
        $scope.noActivePeriod = false;
        $scope.currentDate;
        currentDate();

        $scope.getTests = function(){
            GroupTest.groupTests($stateParams.id).then(function(success){
                $scope.tests = success;
            }).catch(function(response){

                toast.show(response.error);

                if(response.status == 404){
                    $scope.noActivePeriod = true;
                }
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

        $scope.validateUpdate = function(date){

            var date = new Date(date);

            return date > $scope.currentDate;
        };

        function currentDate(){
            $scope.currentDate = new Date();

            $timeout(currentDate, 1000);
        };

        $scope.getTests();

    }
);
