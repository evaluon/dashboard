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
                params: [ 'redirected', 'toState' ],
                controller: 'AuthCtrl'
            }
        ).state(
            'anon.login', {
                url:'/login',
                params: [ 'redirected', 'toState' ],
                templateUrl: 'views/auth/login.tpl.html',
                controller: 'LoginCtrl'
            }
        );

    }

);
