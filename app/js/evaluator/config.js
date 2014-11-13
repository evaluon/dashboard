'use strict';

angular.module('evaluon.evaluator',[
'ui.router'
])
.config(function($stateProvider, routingConfigProvider ){

  $stateProvider
    .state('evaluator', {
        abstract: true,
        url: '/evaluator',
        template: '<ui-view/>',
        controller: 'EvaluatorCtrl',
        data: {
            access: routingConfigProvider.$get().accessLevels.evaluator
        }
    })
  .state('evaluator.home', {
    url: '/home',
    templateUrl: 'views/entity/home.tpl.html',
    controller: ''
  });
})
.run(function($log){
  $log.debug('evaluator load');
});
