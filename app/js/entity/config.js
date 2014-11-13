'use strict';

angular.module('evaluon.entity', [
'ui.router'
])
.config(function($stateProvider, routingConfigProvider){
  $stateProvider
    .state('entity', {
        abstract: true,
        url: '/entity',
        templateUrl: 'views/entity/entity.tpl.html',
        controller: 'EntityCtrl',
        data: {
            access: routingConfigProvider.$get().accessLevels.entity
        }
    })
    .state('entity.home', {
      url: '/home',
      templateUrl: 'views/entity/home.tpl.html'
    });
})
.run(function($log){
  $log.debug('entity load');
});
