'use strict';

angular.module('evaluon.entity', ['ui.router']).config(
    function($stateProvider, authorizationProvider){

        $stateProvider
        .state(
            'entity', {
                abstract: true,
                url: '/entity',
                templateUrl: 'views/entity/entity.tpl.html',
                controller: 'EntityCtrl',
                data: {
                    access: authorizationProvider.$get().accessLevels.entity
                }
            }
        ).state(
            'entity.home', {
                url: '/home',
                templateUrl: 'views/entity/home.tpl.html'
            }
        );

    }
);
