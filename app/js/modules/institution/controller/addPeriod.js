angular.module('evaluon.institution').controller(
    'InstitutionAddPeriodCtrl',
    function($scope, $mdDialog, Period, institution, toast){

        $scope.add = function($event, data){
            Period.createPeriod(institution, data).then(function(success){
                toast.showSuccess();
            }).catch(function(response){
                toast.show(response.message);
            });
        };

    }
);
