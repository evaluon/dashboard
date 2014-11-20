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
            'evaluator.test', {
                url:'/test/:institution/:id',
                templateUrl: 'views/evaluator/tests.tpl.html',
                controller: 'TestCtrl'
            }
        ).state (
            'evaluator.addTest', {
                url:'/test/add/:institution/:id/',
                templateUrl: 'views/evaluator/addTest.tpl.html',
                controller: 'AddTestCtrl'
            }
        ).state(
            'evaluator.questionBank', {
                url:'question/bank',
                templateUrl: 'views/evaluator/questionBank.tpl.html'
            }
        ).state(
            'evaluator.changePassword', {
                url: '/password',
                templateUrl: 'views/auth/changePassword.tpl.html',
                controller: 'ChanguePasswordCtrl'
            }
        );

    }
);
