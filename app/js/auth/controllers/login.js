'use strict';

angular.module('evaluon.auth')
.controller('LoginCtrl', function($scope){
  $scope.user = {
    email: 'nombre@correo.co',
    password: 'contraseña'
  };

  console.log('yes');
});
