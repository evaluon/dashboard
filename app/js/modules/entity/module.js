'use strict';

angular.module('evaluon.entity', ['ui.router']).config(
    function($stateProvider, authorizationProvider){

        $stateProvider
        .state(
            'entity', {
                abstract: true,
                url: '/entity',
                templateUrl: 'views/entity/entity.tpl.html',
                data: {
                    access: authorizationProvider.$get().accessLevels.entity
                }
            }
        ).state(
            'entity.home', {
                url: '/',
                templateUrl: 'views/entity/home.tpl.html',
                controller: 'EntityHomeCtrl'
            }
        ).state(
            'entity.statistics', {
                url: '/statistics',
                templateUrl: 'views/entity/statistics.tpl.html',
                controller: 'StatisticsCtrl'
            }
        ).state(
            'entity.changePassword', {
                url: '/password',
                templateUrl: 'views/auth/changePassword.tpl.html',
                controller: 'ChanguePasswordCtrl'
            }
        );

    }
);
