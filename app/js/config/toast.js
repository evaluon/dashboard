'use strict';

angular.module('evaluon').service(
    'toast', function($mdToast){
        this.show = function(message){
            $mdToast.show({
                template: '<md-toast>{0}</md-toast>'.format(
                    message || "Petición finalizada exitosamente"
                ),
                hideDelay: 6000,
                position: 'bottom left'
            });
        },
        this.showSuccess = function(){
            var that = this;
            
        }
    }
)
