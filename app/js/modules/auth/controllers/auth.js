'use strict';

angular.module('evaluon.auth').controller(
    'AuthCtrl', function($state){

        // TODO: Add the logic to check if an user is logged in
        $state.go('anon.login', { redirected: true });

    }
);
