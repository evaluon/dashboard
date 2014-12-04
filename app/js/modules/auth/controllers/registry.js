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

        user.password = CryptoJS.SHA1(user.password).toString();

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

    $scope.onFile = function($files, event){
        console.log("Not prevented")

        event.preventDefault();
        console.log("Prevented (?) Yay!")
        $scope.file = $files[0];
    };


    $scope.registerInstitution = function(event, valid){
        console.log(valid);
        event.preventDefault();

        var user = _.omit($scope.institution.evaluator, 'password2');

        registerUser(_.omit(user, 'area')).then(function(){
            return Auth.password(user.mail, user.password);
        }).then(function(token){
            return Evaluator.setEvaluator(
                { area: user.area }, token
            ).then(function(){
                return token;
            });
        }).then(function(token){
            return User.getUser(
                token.token_type, token.access_token
            ).then(function(user){
                return { user: user, token: token };
            });
        }).then(function(data){
            var user = data.user,
                token = data.token;

            var institution = _.extend(
                _.omit($scope.institution, 'evaluator'),
                { evaluator_id: user.id }
            );
            return Institution.createInstitution(
                institution, $scope.file, token
            );
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
            return Auth.password(user.mail, user.password);
        }).then(function(token){
            return Evaluator.setEvaluator({ area: user.area }, token);
        }).then(function(){
            // Return & Login
        }).catch(function(response){
            mdToast(response.error);
        });

    };

});
