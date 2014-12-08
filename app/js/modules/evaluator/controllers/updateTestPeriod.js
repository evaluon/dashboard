angular.module('evaluon.institution').controller(
    'InstitutionUpdateTestPeriodCtrl', function($scope, $mdDialog, Test, item, toast){

        $scope.data = {
            id: item.id,
            start_date: new Date(item.start_date),
            stop_date: new Date(item.stop_date)
        };

        $scope.update = function($event, data){
            Test.updateTest(item.id, data).then(function(success){
                toast.show('Periodo actualizado correctamente');
            }).catch(function(error){
                toast.show(error.error);
            });
        };
    });
