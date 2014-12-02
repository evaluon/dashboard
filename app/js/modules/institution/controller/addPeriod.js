angular.module('evaluon.institution').controller(
    'InstitutionAddPeriodCtrl', function($scope, $mdDialog, Period, institution){

        $scope.add = function($event, data){
            Period.createPeriod(institution).then(function(success){
                console.log(success);
            });
        };
    });
