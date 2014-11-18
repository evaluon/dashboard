'use strict';

angular.module('evaluon.evaluator',['ui.router']).config(
    function($stateProvider, authorizationProvider ){

        $stateProvider
        .state(
            'evaluator', {
                abstract: true,
                url: '/evaluator',
                templateUrl: 'views/evaluator/evaluator.tpl.html',
                data:{
                    access: authorizationProvider.$get().accessLevels.evaluator
                }
            }
        ).state(
            'evaluator.home', {
                url: '/',                
                controller: 'EvaluatorCtrl',
                templateUrl: 'views/evaluator/home.tpl.html'
            }
        ).state(
            'evaluator.tests', {
                url:'/test/:groupId',
                templateUrl: 'views/evaluator/tests.tpl.html'
            }
        ).state (
            'evaluator.addTest', {
                url:'/test/add/:groupId',
                templateUrl: 'views/evaluators/addTests.tpl.html'
            }
        ).state(
            'evaluator.questionBank', {
                url:'question/bank',
                templateUrl: 'views/evaluator/questionBank.tpl.html'
            }
        );

    }
);
