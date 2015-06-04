 'use strict';

angular.module('evaluon.evaluator',['ui.router', 'contenteditable']).config(
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
                url: '',
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
            'evaluator.updateTest', {
                url: '/test/add/:institution/:id/:test/edit',
                templateUrl: 'views/evaluator/updateTest.tpl.html',
                controller: 'UpdateTestCtrl'
        }).state(
            'evaluator.evalueeTest', {
                url: '/test/:group/evaluee/:id',
                templateUrl: 'views/evaluator/evalueeInTest.tpl.html',
                controller: 'EvalueeTestCtrl'
            }
        ).state(
            'evaluator.questionBank', {
                url:'/question-bank',
                templateUrl: 'views/evaluator/questionBank.tpl.html',
                controller: 'QuestionBankCtrl'
            }
        ).state(
            'evaluator.changePassword', {
                url: '/password',
                templateUrl: 'views/auth/changePassword.tpl.html',
                controller: 'ChanguePasswordCtrl'
            }
        ).state(
            'evaluator.scoreTest', {
                url:'/score-test/:id/evaluee/:evalueeId/:groupId',
                templateUrl: 'views/evaluator/score.tpl.html',
                controller: 'ScoreTestCtrl'
            }
        ).state(
            'evaluator.user', {
                url:'/user',
                templateUrl: 'views/auth/user.tpl.html',
                controller: 'UserInfoCtrl'
            }
        );
    }
);
