'use strict';

angular.module('evaluon.auth').controller(
    'LoginCtrl', function($scope, $state, Auth, User, $mdDialog, $mdToast){

        function mdToast(message){

            $mdToast.show({
                template: '<md-toast>{0}</md-toast>'.format(message),
                hideDelay: 6000,
                position: 'bottom left'
            });

        }

        $scope.user = {
            email: '',
            password: ''
        };

        function login(token, user){
            token.role = user.role;
            if(user.institution_id){
                token.institution = user.institution_id;
            }
            Auth.login(token);
            $state.go('anon.auth');
        }

        $scope.login = function(event){
            event.preventDefault();

            var uToken;

            Auth.password(
                $scope.user.email, $scope.user.password
            ).then(function(token){
                uToken = token;
                return User.getUser(token.token_type, token.access_token);
            }).then(function(user){
                login(uToken, user);
            }).catch(function(error){
                console.error(error);
            });

        };

        $scope.registry = function($event){

            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/auth/registry.tpl.html',
                controller: 'RegistryCtrl',
                escapeToClose: true,
                onComplete: function(institution, token){
                    if(!institution){
                        return User.getUser(
                            token.token_type, token.access_token
                        ).then(function(user){
                            login(token, user);
                        });
                    } else {

                    }
                }
            });
        };

        $scope.forgotPassword = function(){

            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/auth/recover.tpl.html',
                controller: 'RecoverPasswordCtrl',
                escapeToClose: true,
                onComplete: function(error){
                    if(!error) {
                        toast.show(
                            "Su nueva contraseña ha sido enviada a su " +
                            "correo electrónico."
                        );
                    } else {
                        toast.show(error.message);
                    }
                }
            });

        };

    }
);
