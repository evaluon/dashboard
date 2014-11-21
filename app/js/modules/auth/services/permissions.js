'use strict';

angular.module('evaluon.auth').factory('Permissions', function(Auth){

    return {

        check: function(state) {

            var user = Auth.userLogged();

            if(!user){
                if(state.name != 'anon.login'){
                    return 'anon.login';
                } else {
                    return false;
                }
            } else {
                if (user.role == 1){
                    return 'anon.logout';
                } else if (!(state.data.access & user.role)) {
                    return 'public.403';
                } else {
                    return false;
                }
            }

        }

    };

});
