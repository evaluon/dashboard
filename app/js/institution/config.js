'use strict';

angular.module('evaluon.institution', [
'ui.router'
])
.config(function($stateProvider, routingConfigProvider){

  $stateProvider
    .state('institution', {
        abstract: true,
        url: '/institution',
        templateUrl: 'views/institution/institution.tpl.html',
        controller: 'InstitutionCtrl',
        data: {
            access: routingConfigProvider.$get().accessLevels.evaluator
        }
    })
  .state('institution.home', {
    url: '/home',
    templateUrl: 'views/institution/home.tpl.html'
  });
})
.run(function($log){
  $log.debug('institution load');
});
