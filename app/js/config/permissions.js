'use strict';

angular.module('evaluon.permissions').provider('permissionsConfig', function(){

    this.userRoles = {
        public: 1,
        evaluator: 2,
        institution: 4,
        entity: 8
    };

    this.accessLevels = {
        public: this.userRoles.public |
                this.userRoles.evaluator |
                this.userRoles.institution |
                this.userRoles.entity,
        anon : this.userRoles.public,
        evaluator: this.userRoles.evaluator,
        institution: this.userRoles.institution,
        entity: this.userRoles.entity
    };

    this.$get = function(){
        return {
            userRoles: this.userRoles,
            accessLevels: this.accessLevels
        };
    };

});
