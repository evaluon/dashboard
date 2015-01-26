angular.module('evaluon.institution').controller(
    'InstitutionUpdateTestPeriodCtrl', function($scope, $mdDialog, Test, item, toast){

        startDate = new Date(item.start_date);
        startDate.setMilliseconds(0);
        startDate.setSeconds(0);
        stopDate = new Date(item.stop_date);
        stopDate.setMilliseconds(0);
        stopDate.setSeconds(0);


        $scope.data = {
            id: item.id,
            start_date: startDate,
            stop_date: stopDate
        };

        $scope.validate = function(form, data){
            var actualDate = new Date();

            return form.$invalid || data.start_date >= data.stop_date;
        };

        $scope.update = function($event, data){
            Test.updateTest(item.id, data).then(function(success){
                toast.show('Periodo actualizado correctamente');
                $mdDialog.hide();
            }).catch(function(error){
                toast.show(error.error);
            });
        };
    });
