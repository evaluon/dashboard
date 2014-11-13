'use strict';

angular.module('evaluon.institution', [
'ui.router'
])
.config(function($stateProvider, routingConfigProvider){

  $stateProvider
    .state('institution', {
        abstract: true,
        url: '/evaluator',
        template: '<ui-view/>',
        controller: 'InstitutionCtrl',
        data: {
            access: routingConfigProvider.$get().accessLevels.evaluator
        }
    })
  .state('institution.home', {
    url: '/home',
    templateUrl: 'views/entity/home.tpl.html',
    controller: ''
  });
})
.run(function($log){
  $log.debug('institution load');
});
