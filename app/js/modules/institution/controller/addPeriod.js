angular.module('evaluon.institution').controller(
    'InstitutionAddPeriodCtrl',
    function($scope, $mdDialog, Period, institution, toast){

        var date = new Date();
        date.setMilliseconds(0);
        date.setSeconds(0);

        $scope.data = {};
        $scope.data.start_date = date;
        $scope.data.end_date = date;

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
