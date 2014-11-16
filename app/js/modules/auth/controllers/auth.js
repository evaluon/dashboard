'use strict';

angular.module('evaluon.auth').controller(
    'AuthCtrl', function($state, access, localStorageService){

        if(!localStorageService.get(CryptoJS.SHA1(access.tokens.client))){
            $state.go('anon.login');
        } else {
            // TODO: Add the logic to check if an user is logged in
            $state.go('evaluator.home');
        }


    }
);
