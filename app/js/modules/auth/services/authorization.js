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
                anon: userRoles.public |
                    userRoles.evaluator |
                    userRoles.institution |
                    userRoles.entity,
                public: userRoles.public |
                    userRoles.evaluator |
                    userRoles.institution |
                    userRoles.entity,
                evaluator: userRoles.evaluator | userRoles.institution,
                institution: userRoles.institution,
                entity: userRoles.entity
            }
        };

    }

});
