'use strict';

angular.module('evaluon.entity').controller(
    'EntityCtrl', function($scope, $mdDialog, Institution){

        $scope.institutions = [];

        var getInstitutions = function(){
            Institution.listInstitutions().then(function(institutions){
                $scope.institutions = institutions.data;
            });
        };

        $scope.addInstitution = function($event){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/entity/addInstitution.tpl.html',
                controller: 'AddInstitutionCtrl',
                escapeToClose: true,
                onComplete: function(){
                    getInstitutions();
                }
            });
        };

        getInstitutions();



    }
);
