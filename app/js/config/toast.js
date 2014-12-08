'use strict';

angular.module('evaluon').service(
    'toast', function($mdToast){
        this.show = function(message){
            $mdToast.show({
                template: '<md-toast>{0}</md-toast>'.format(message),
                hideDelay: 6000,
                position: 'bottom left'
            });
        };
        
        this.showSuccess = function(message){
            this.show("Petición finalizada exitosamente");
        };

    }
)
