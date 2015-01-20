'use strict';

angular.module('evaluon.institution', ['ui.router']).config(
    function($stateProvider, authorizationProvider){

        $stateProvider
        .state(
            'institution', {
                abstract: true,
                url: '/institution',
                templateUrl: 'views/institution/institution.tpl.html',
                controller: 'InstitutionMenuCtrl',
                data: {
                    access: authorizationProvider.$get().accessLevels.institution
                }
            }
        ).state(
            'institution.home', {
                url: '',
                templateUrl: 'views/institution/home.tpl.html',
                controller: 'InstitutionCtrl'
            }
        ).state(
            'institution.group', {
                url: '/group',
                templateUrl: 'views/institution/group.tpl.html',
                controller: 'InstitutionGroupCtrl'
            }
        ).
        state(
            'institution.groupsByevaluator', {
                url: '/group/:id',
                templateUrl: 'views/institution/groupByEvaluator.tpl.html',
                controller: 'GroupByEvaluatorCtrl'
            }
        )
        .state(
            'institution.changePassword', {
                url: '/password',
                templateUrl: 'views/auth/changePassword.tpl.html',
                controller: 'ChanguePasswordCtrl'
            }
        )
        .state(
            'institution.periodes', {
                url: '/periodes',
                templateUrl: 'views/institution/period.tpl.html',
                controller: 'InstitutionPeriodCtrl'
            }
        ).state(
            'institution.test', {
                url:'/test/:institution/:id',
                templateUrl: 'views/evaluator/tests.tpl.html',
                controller: 'TestCtrl'
            }
        ).state (
            'institution.addTest', {
                url:'/test/add/:institution/:id/',
                templateUrl: 'views/evaluator/addTest.tpl.html',
                controller: 'AddTestCtrl'
            }
        ).state(
            'institution.evalueeTest', {
                url: '/test/:group/evaluee/:id',
                templateUrl: 'views/evaluator/evalueeInTest.tpl.html',
                controller: 'EvalueeTestCtrl'
            }
        ).state(
            'institution.scoreTest', {
                url:'/score-test/:id/evaluee/:evalueeId/:groupId',
                templateUrl: 'views/evaluator/score.tpl.html',
                controller: 'ScoreTestCtrl'
            }
        ).state(
            'institution.user', {
                url:'/user',
                templateUrl: 'views/auth/user.tpl.html',
                controller: 'UserInfoCtrl'
            }
        );

    }
);
