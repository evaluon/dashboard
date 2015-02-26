angular.module('evaluon.institution').controller(
    'InstitutionUpdatePeriodCtrl',
    function($scope, $mdDialog, Period, institution, item){

        $scope.data = item;

        $scope.update = function($event, data){
            console.log(data);
            Period.updatePeriod($scope.data).then(function(success){
                console.log(success);
            });
        };
    });
