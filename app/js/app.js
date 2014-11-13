'use strict';

angular.module('evaluon', [
'ui.router', 'LocalStorageModule', 'ngMaterial',

'evaluon.auth', 'evaluon.entity', 'evaluon.evaluator',
'evaluon.institution', 'evaluon.templates'
])
.config(

    function(
        $stateProvider, $logProvider, $urlRouterProvider, $locationProvider,
        localStorageServiceProvider, authorizationProvider
    ){

        //Debug mode
        $logProvider.debugEnabled(true);

        //Routing config
        $urlRouterProvider.otherwise('/404');
        $locationProvider.html5Mode(true);

        //Public routes
        $stateProvider
        .state(
            'public', {
                abstract: true,
                template: '<ui-view/>',
                data: {
                    access: authorizationProvider.$get().accessLevels.public
                }
            }
        ).state(
            'public.404', {
                url:'/404',
                templateUrl: 'views/errors/404.tpl.html'
            }
        );

        //Local Storage Config
        localStorageServiceProvider
            .setPrefix('dashboardEvaluon')
            .setStorageCookie(30, '/evaluon/dashboard')
            .setNotify(true, true);
    }

).run(
    function(Auth, access, localStorageService){

        if(!localStorageService.get(CryptoJS.SHA1(access.tokens.client))){
            Auth.clientCredentials().then(function(token){
                localStorageService.set(
                    CryptoJS.SHA1(access.tokens.client).toString(), token
                );
            });
        }

    }
);
