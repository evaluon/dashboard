angular.module('evaluon.institution').controller(
    'InstitutionUpdatePeriodCtrl', function($scope, $mdDialog, Period, institution, item){

        $scope.data = item;
        console.log(item)
        $scope.update = function($event, data){
            Period.updatePeriod(institution).then(function(success){
                console.log(success);
            });
        };
    });
