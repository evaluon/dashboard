'use strict';

angular.module('evaluon.evaluator',[
'ui.router'
])
.config(function($stateProvider, routingConfigProvider ){

  $stateProvider
    .state('evaluator', {
        abstract: true,
        url: '/evaluator',
        templateUrl: 'views/evaluator/evaluator.tpl.html',
        controller: 'EvaluatorCtrl',
        data: {
            access: routingConfigProvider.$get().accessLevels.evaluator
        }
    })
  .state('evaluator.home', {
    url: '/home',
    templateUrl: 'views/evaluator/home.tpl.html'
  });
})
.run(function($log){
  $log.debug('evaluator load');
});
