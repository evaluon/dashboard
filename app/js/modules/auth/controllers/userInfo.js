'use strict';

angular.module('evaluon.auth').controller(
    'UserInfoCtrl', function($state, Auth, User, Institution, toast){

        $scope.user = {};

        $scope.getUser = function(){

            var token = Auth.loggedUser();

            return User.getUser(
                token.token_type, token.access_token
            ).then(function(user){
                $scope.user = user;
                if(user.institution_id){
                    delete $scope.user["institution_id"];
                    Institution.activeInstitution().then(function(institution){
                        $scope.user.institution = institution;
                    });
                }
            }).catch(function(error){
                toast.show(error.message);
            });

        }

    }
)
