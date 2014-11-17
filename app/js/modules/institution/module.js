'use strict';

angular.module('evaluon.institution', ['ui.router']).config(
    function($stateProvider, authorizationProvider){

        $stateProvider
        .state(
            'institution', {
                abstract: true,
                url: '/institution',
                templateUrl: 'views/institution/institution.tpl.html',
                controller: 'InstitutionCtrl',
                data: {
                    access: authorizationProvider.$get().accessLevels.institution
                }
            }
        ).state(
            'institution.home', {
                url: '/home',
                templateUrl: 'views/institution/home.tpl.html'
            }
        );

    }
);
