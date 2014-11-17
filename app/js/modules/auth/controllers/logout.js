'use strict';

angular.module('evaluon.auth').controller('LogoutCtrl', function(Auth, $state){
    Auth.logout();
    $state.go('anon.login');
});
