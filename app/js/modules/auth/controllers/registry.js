'use strict';

angular.module('evaluon.auth').controller('RegistryCtrl',

function($mdDialog, $scope, Auth, User, Evaluator, Institution, $mdToast){

    $scope.file = false;

    function mdToast(message){

        $mdToast.show({
            template: '<md-toast>{0}</md-toast>'.format(message),
            hideDelay: 6000,
            position: 'bottom left'
        });

    }

    function registerUser(user){
        var token =  Auth.client();
        return User.createUser(user, token);
    }

    $scope.institution = {
        id: '',
        name: '',
        address: '',
        mail: '',
        phone_number: '',
        description: '',
        evaluator: {
            id: '',
            first_name: '',
            last_name: '',
            birth_date: new Date(),
            mail: '',
            phone_number: '',
            area: '',
            password: '',
            password2: ''
        }
    };

    $scope.evaluator = {
        id: '',
        first_name: '',
        last_name: '',
        birth_date: new Date(),
        mail: '',
        phone_number: '',
        area: '',
        password: '',
        password2: ''
    };

    $scope.onFile = function($event, $file){
        $event.preventDefault();
        $scope.file = $file[0];
    };


    $scope.registerInstitution = function(event){
        event.preventDefault();

        var user = _.omit($scope.institution.evaluator, 'password2');

        registerUser(_.omit(user, 'area')).then(function(){
            return Auth.password(user.email, user.password);
        }).then(function(token){
            return Evaluator.setEvaluator(
                { area: user.area }, token
            ).then(function(){
                return token;
            });
        }).then(function(){
            return User.getUser(token.token_type, token.access_token);
        }).then(function(user){
            var institution = _.extend(
                _.omit($scope.institution, 'evaluator'),
                { evaluator_id: user.id }
            );
            return Institution.createInstitution(institution, $scope.file);
        }).then(function(){
            mdToast(
                "Tu solicitud ha sido recibida exitosamente. " +
                "Revisa en los próximos días si fue aceptada " +
                "o escribenos a ######@#######.com"
            );
            // Return & Login
        }).catch(function(response){
            mdToast(response.error);
        });

    };

    $scope.registerEvaluator = function(event){
        event.preventDefault();

        var user = _.omit($scope.evaluator, 'password2');

        registerUser(_.omit(user, 'area')).then(function(){
            return Auth.password(user.email, user.password);
        }).then(function(token){
            return Evaluator.setEvaluator({ area: user.area }, token);
        }).then(function(){
            // Return & Login
        }).catch(function(response){
            mdToast(response.error);
        });

    };

});
