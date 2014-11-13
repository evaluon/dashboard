'use strict';

angular.module('evaluon', [
'angularjs-crypto',
'ui.router',
'LocalStorageModule',
'ngMaterial',
'evaluon.auth',
'evaluon.entity',
'evaluon.evaluator',
'evaluon.institution',
'evaluon.templates'
])
.config(function($stateProvider, $logProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider, routingConfigProvider){

    //Debug mode
    $logProvider.debugEnabled(false);

    //Routing config
    $urlRouterProvider.otherwise('/404');
    $locationProvider.html5Mode(false);

    //Public routes
    $stateProvider
    .state('public', {
        abstract: true,
        template: '<ui-view/>',
        data: {
            access: routingConfigProvider.$get().accessLevels.public
        }
    })
    .state('public.404',{
        url: '/404',
        template: '<h1 class="text-center">Error 4:04 Sleep not found</h1>'
    });

    //Local Storage Config
    localStorageServiceProvider
    .setPrefix('dashboardEvaluon')
    .setStorageCookie(30, '/evaluon/dashboard')
    .setNotify(true, true);
})
.run(function($log){
    $log.debug('app.js load');
});
