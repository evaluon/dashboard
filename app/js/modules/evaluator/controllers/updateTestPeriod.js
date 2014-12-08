angular.module('evaluon.institution').controller(
    'InstitutionUpdateTestPeriodCtrl', function($scope, $mdDialog, Test, item, Toast){

        $scope.data = {
            start_date: new Date(item.start_date),
            stop_date: new Date(item.stop_date)
        };

        $scope.update = function($event, data){
            Test.updateTest(item.id, data).then(function(success){
                Toast.show('Actualizado correctamente');
            }).catch(function(error){
                Toast.show(error.message);
            });
        };
    });
