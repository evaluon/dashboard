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
        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.url();

            // check to see if the path already has a slash where it should be
            if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
                return;
            }

            if (path.indexOf('?') > -1) {
                return path.replace('?', '/?');
            }

            return path + '/';
        });
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

        $rootScope.$on('$stateChangeStart', function(e, toState, toParams){

            var ctoken = CryptoJS.SHA1(tokens.client).toString(),
                rtoken = CryptoJS.SHA1(tokens.redirect).toString(),
                ptoken = CryptoJS.SHA1(tokens.params).toString(),
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
                        if(toParams != {}){
                            localStorageService.set(ptoken, toParams);
                        }
                        $state.go('anon.auth');
                    } else if(toState.name != 'anon.auth') {
                        if(localStorageService.get(ptoken)){
                            localStorageService.remove(ptoken);
                        }
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
