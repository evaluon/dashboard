'use strict';

angular.module('evaluon.auth').controller(
    'AuthCtrl', function($state, Auth, toast){

        var user = Auth.userLogged(),
            userRole = user.role;

        var userHome = (userRole == 2 ?
            'evaluator' : (userRole == 4 ?
                'institution' : 'entity'
            )
        );

        if(userRole == 1){
            $state.go('anon.login');
        }
        else{
            $state.go('{0}.home'.format(userHome));
        }

    }
);
