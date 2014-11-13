'use strict';

angular.module('evaluon.entity', [
'ui.router'
])
.config(function($stateProvider, routingConfigProvider){
  $stateProvider
    .state('entity', {
        abstract: true,
        url: '/entity',
        template: '<ui-view/>',
        controller: 'EntityCtrl',
        data: {
            access: routingConfigProvider.$get().accessLevels.entity
        }
    })
    .state('entity.home', {
      url: '/home',
      templateUrl: 'views/entity/home.tpl.html',
      controller: ''
    });
})
.run(function($log){
  $log.debug('entity load');
});
