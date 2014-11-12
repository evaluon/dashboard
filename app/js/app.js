'use strict';

angular.module('evaluon', [
'ui.router',
'LocalStorageModule',
'ngMaterial',
'evaluon.entity',
'evaluon.evaluator',
'evaluon.institution'
])
.config(function($stateProvider, localStorageServiceProvider){
  console.log('Load config');
  //Routing config
  //Public routes
  $stateProvider
    .state('public', {
        abstract: true,
        template: '<ui-view/>',
        data: {

        }
    });

  //Local Storage Config
  localStorageServiceProvider
  .setPrefix('dashboardEvaluon')
  .setStorageCookie(30, '/evaluon/dashboard')
  .setNotify(true, true);
})
.run(function(){

});
