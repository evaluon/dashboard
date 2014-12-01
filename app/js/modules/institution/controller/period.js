'use strict';

angular.module('evaluon.institution').controller(
    'InstitutionPeriodCtrl', function($scope, $mdDialog, Period, Auth){        ;

        $scope.periodes = [];

        $scope.getPeriodes = function(){
            var institution = Auth.userLogged().institution;
            Period.activePeriods(institution).then(function(success){
                console.log(success);
                $scope.periodes = success;
            })
        };

        $scope.getPeriodes();

    });
