'use strict';

angular.module('evaluon.auth').controller(
    'AuthCtrl', function($state, Auth, tokens, localStorageService){

        var rtoken = CryptoJS.SHA1(tokens.redirect).toString(),
            redirect = localStorageService.get(rtoken),
            user = Auth.userLogged;

        if(
            (redirect.name == "anon.auth") ||
            (redirect.name ==  "anon.login" && user)
        ) {
            var userRole = user.role,
            userHome = (userRole == 2 ?
                'evaluator' : (userRole == 4 ?
                    'institution' : 'entity'
                )
            );
            if(userRole == 1) $state.go('anon.logout');
            else $state.go('{0}.home'.format(userHome));
        } else if(redirect.data.access & user.role){
            $state.go(redirect.name);
        } else {
            $state.go('public.403');
        }

    }
);
