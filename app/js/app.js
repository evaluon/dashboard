'use strict';

angular.module('evaluon', [
'ngMaterial', 'ui.router', 'LocalStorageModule', 'angularFileUpload',

'evaluon.auth', 'evaluon.entity', 'evaluon.evaluator',
'evaluon.institution', 'evaluon.templates', 'blockUI',
'ng-nvd3'
])
.config(

    function(
        $stateProvider, $logProvider, $urlRouterProvider, $locationProvider,
        localStorageServiceProvider, authorizationProvider, blockUIConfig,
        $httpProvider
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
            'public.403', {
                url:'/403',
                templateUrl: 'views/errors/403.tpl.html'
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


        //Block UI
        blockUIConfig.message = 'Cargando...';
        blockUIConfig.autoBlock = true;

        //Interceptor
        $httpProvider.interceptors.push('Interceptor');

    }


).run(
    function($state, $rootScope, Auth, Permissions){

        $rootScope.$on('$stateChangeStart', function(e, toState, toParams){

            Auth.clientCredentials().then(function(client){
                if(!Auth.client()) Auth.setClient(client);
            });

            var nextState = Permissions.check(toState);

            if(nextState){
                e.preventDefault();
                $state.go(nextState);
            }

        });

        $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams){
            console.log("GET %s", toState.url);
        });

    }
);
