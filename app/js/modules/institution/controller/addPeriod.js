angular.module('evaluon.institution').controller(
    'InstitutionAddPeriodCtrl', function($scope, $mdDialog, Period, institution){

        $scope.add = function($event, data){
            Period.createPeriod(institution, data).then(function(success){
                console.log(success);
            });
        };

    }
);
