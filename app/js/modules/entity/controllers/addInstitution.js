'use strict';

angular.module('evaluon.entity').controller(
    'AddInstitutionCtrl', function($scope, $mdDialog, Institution){

        $scope.institution = {
            id: '',
            name: '',
            address: '',
            phone_number: '',
            image: {
                description: ''
            }
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

    }
);
