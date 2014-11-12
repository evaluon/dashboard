'use strict';

angular.module('evaluon.auth', [
'ui.router'
])
.config(function($stateProvider, routingConfigProvider){

    //routing
    $stateProvider
      .state('anon', {
          abstract: true,
          template: '<ui-view/>',
          data: {
              access: routingConfigProvider.$get().accessLevels.public
          }
      })
      .state('anon.login', {
        url:'/login',
        templateUrl: 'views/auth/login.tpl.html'
      });
})
.run(function($log){
  $log.debug('auth load');
});
