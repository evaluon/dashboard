'use strict';

angular.module('evaluon.institution', ['ui.router']).config(
    function($stateProvider, authorizationProvider){

        $stateProvider
        .state(
            'institution', {
                abstract: true,
                url: '/institution',
                templateUrl: 'views/institution/institution.tpl.html',
                data: {
                    access: authorizationProvider.$get().accessLevels.institution
                }
            }
        ).state(
            'institution.home', {
                url: '/',
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
        );

    }
);
