angular.module('evaluon.institution').controller(
    'InstitutionAddPeriodCtrl',
    function($scope, $mdDialog, Period, institution, toast){



        $scope.validate = function(form, data){
            var actualDate = new Date();
            return form.$invalid || data.start_date >= data.end_date || data.end_date <= actualDate;
        };

        $scope.add = function($event, data){
            Period.createPeriod(institution, data).then(function(success){
                toast.showSuccess();
                $mdDialog.hide({ success: true });
            }).catch(function(response){
                toast.show(response.message);
            });
        };

    }
);
