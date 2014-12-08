'use strict';

angular.module('evaluon.entity').controller(
    'EntityHomeCtrl', function($scope, $mdDialog, images, Institution){

        $scope.institutions = [];

        $scope.getInstitutions = function(){
            Institution.listInstitutions().then(function(institutions){
                $scope.institutions = _.map(institutions.data, function(inst){
                    inst.image.location = images.evaluon(inst.image.location);
                    return inst;
                });
            });
        };

        $scope.getInstitutions();

    }
);
