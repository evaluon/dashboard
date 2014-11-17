'use strict';

angular.module('evaluon.evaluator',['ui.router']).config(
    function($stateProvider, authorizationProvider ){

        $stateProvider
        .state(
            'evaluator', {
                abstract: true,
                url: '/evaluator',
                templateUrl: 'views/evaluator/evaluator.tpl.html',
                controller: 'EvaluatorCtrl',
                data:{
                    access: authorizationProvider.$get().accessLevels.evaluator
                }
            }
        ).state(
            'evaluator.home', {
                url: '/home',
                templateUrl: 'views/evaluator/home.tpl.html'
            }
        );

    }
);
