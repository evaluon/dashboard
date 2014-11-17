'use strict';

angular.module('evaluon.auth', ['ui.router']).config(

    function($stateProvider, authorizationProvider){

        // Manage routes
        $stateProvider
        .state(
            'anon', {
                abstract: true,
                template: '<ui-view/>',
                data: {
                    access: authorizationProvider.$get().accessLevels.public
                }
            }
        ).state(
            'anon.auth', {
                url:'/',
                controller: 'AuthCtrl'
            }
        ).state(
            'anon.login', {
                url:'/login',
                templateUrl: 'views/auth/login.tpl.html',
                controller: 'LoginCtrl'
            }
        ).state(
            'anon.logout', {
                url:'/logout',
                controller: 'LogoutCtrl'
            }
        );

    }

);
