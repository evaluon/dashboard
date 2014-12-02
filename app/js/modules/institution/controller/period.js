'use strict';

angular.module('evaluon.institution').controller(
    'InstitutionPeriodCtrl', function($scope, $mdDialog, Period, Auth){

        $scope.periodes = [];

        $scope.getPeriodes = function(){
            var institution = Auth.userLogged().institution;
            Period.activePeriods(institution).then(function(success){
                $scope.periodes = success;
            })
        };

        $scope.addPeriod = function($event){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/institution/addPeriod.tpl.html',
                controller: 'InstitutionAddPeriodCtrl',
                escapeToClose: true,
                locals: {institution: Auth.userLogged().institution}
            });
        };

        $scope.updatePeriod = function($event, item){
            console.log(item);
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/institution/updatePeriod.tpl.html',
                controller: 'InstitutionUpdatePeriodCtrl',
                escapeToClose: true,
                locals: {institution: Auth.userLogged().institution, item: item}
            });
        };

        $scope.getPeriodes();

    });
