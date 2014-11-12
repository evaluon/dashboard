'use strict';

angular.module('evaluon.auth')
.provider('routingConfig', function(){

  this.userRoles = {
    public: 1,
    evaluator: 2,
    institution: 4,
    entity: 8
  };

  var that = this;
  this.accessLevels = {
      public: that.userRoles.public |
              that.userRoles.evaluator |
              that.userRoles.institution |
              that.userRoles.entity,
      anon : that.userRoles.public,
      evaluator: that.userRoles.evaluator,
      institution: that.userRoles.institution,
      entity: that.userRoles.entity
  };

  this.$get = function(){
    var that = this;
    return {
      userRoles: that.userRoles,
      accessLevels: that.accessLevels
    };
  };

});
