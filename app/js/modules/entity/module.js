'use strict';

angular.module('evaluon.entity', ['ui.router']).config(
    function($stateProvider, authorizationProvider){

        $stateProvider
        .state(
            'entity', {
                abstract: true,
                url: '/entity',
                templateUrl: 'views/entity/entity.tpl.html',
                controller: 'EntityMenuCtrl',
                data: {
                    access: authorizationProvider.$get().accessLevels.entity
                }
            }
        ).state(
            'entity.home', {
                url: '',
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
        ).state(
            'entity.approveInstitutions', {
                url: '/approve-institutions',
                templateUrl: 'views/entity/approveInstitutions.tpl.html',
                controller: 'ApproveInstitutionsCtrl'
            }
        ).state(
            'entity.approveAreas', {
                url: '/approve-areas',
                templateUrl: 'views/entity/approveAreas.tpl.html',
                controller: 'ApproveAreasCtrl'
            }
        )
        .state('entity.users', {
                url: '/users',
                templateUrl: 'views/entity/entityUser.tpl.html',
                controller: 'EntityUserCtrl'
        });

    }
);
