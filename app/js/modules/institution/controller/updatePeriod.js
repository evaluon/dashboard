angular.module('evaluon.institution').controller('InstitutionUpdatePeriodCtrl',
    function($scope, $mdDialog, Period, institution, item){

        $scope.data = item;

        $scope.update = function($event, data){
            Period.updatePeriod(
                _.omit($scope.data, 'end_date')
            ).then(function(success){
                console.log(success);
            });

        };

    }
);
