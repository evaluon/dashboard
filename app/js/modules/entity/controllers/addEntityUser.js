'use strict';

angular.module('evaluon.auth').controller('AddEntityUserCtrl',

function($mdDialog, $scope, Auth, User, toast){

    $scope.file = false;

    $scope.register = function($event, user){
        $event.preventDefault();

        var entityUser = angular.copy(user);

        entityUser.password = CryptoJS.SHA1(user.password).toString();
        delete entityUser.password2;

        var token =  Auth.client();

        return User.createUser(entityUser, token).then(function(){
            toast.show('Usuario INCI creado correctamente');
        }).catch(function(result){
            toast.show(result.error);
        });
    }

    $scope.user = {
        id: '',
        first_name: '',
        last_name: '',
        birth_date: new Date(),
        mail: '',
        phone_number: '',
        password: '',
        password2: '',
        role_id: 'admin'
    };

});
