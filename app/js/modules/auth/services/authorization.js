'use strict';

var userRoles = {
    public: 1,
    evaluator: 2,
    institution: 4,
    entity: 8
};

angular.module('evaluon.auth').provider('authorization', function(){

    this.$get = function(){

        return {
            userRoles: userRoles,
            accessLevels: {
                public: userRoles.public |
                userRoles.evaluator |
                userRoles.institution |
                userRoles.entity,
                anon : userRoles.public,
                evaluator: userRoles.evaluator,
                institution: userRoles.institution,
                entity: userRoles.entity
            }
        };

    }

});
