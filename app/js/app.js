'use strict';

angular.module('evaluon', [
'ngMaterial', 'ui.router', 'LocalStorageModule', 'angularFileUpload',

'evaluon.auth', 'evaluon.entity', 'evaluon.evaluator',
'evaluon.institution', 'evaluon.templates', 'blockUI'
])
.config(

    function(
        $stateProvider, $logProvider, $urlRouterProvider, $locationProvider,
        localStorageServiceProvider, authorizationProvider, blockUIConfig,
        $httpProvider
    ){

        //Debug mode
        $logProvider.debugEnabled(false);

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
    function(
        $state, $rootScope, Auth, tokens, localStorageService
    ){

        $rootScope.$on('$stateChangeStart', function(e, toState){

            var ctoken = CryptoJS.SHA1(tokens.client).toString(),
                rtoken = CryptoJS.SHA1(tokens.redirect).toString(),
                utoken = CryptoJS.SHA1(tokens.user).toString();

            var user = localStorageService.get(utoken);

            if(!localStorageService.get(ctoken)){
                Auth.clientCredentials().then(function(token){
                    localStorageService.set(ctoken, token);
                });
            }

            if(toState.name != 'anon.login'){
                if(user){
                    var redirection = localStorageService.get(rtoken);
                    if(!redirection){
                        e.preventDefault();
                        localStorageService.set(rtoken, toState);
                        $state.go('anon.auth');
                    } else if(toState.name != 'anon.auth') {
                        localStorageService.remove(rtoken);
                    }
                } else {
                    e.preventDefault();
                    $state.go('anon.login');
                }
            }

        });

    }
);
