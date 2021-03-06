'use strict';

angular.module('evaluon.auth').controller('RegistryCtrl',

function($mdDialog, toast, $scope, Auth, User, Evaluator, Institution){

    $scope.file = false;

    function registerUser(user){

        user.password = CryptoJS.SHA1(user.password).toString();

        var token =  Auth.client();
        return User.createUser(user, token);
    }

    $scope.validateInstitution = function(form, password1, password2, file, email1, email2){

        return form.$invalid || password1.length < 6 || (password1 != password2) || !file || !$scope.validateEmail(email1) || !$scope.validateEmail(email2);
    };

    $scope.validateEvaluator = function(form, password1, password2, email){

        return form.$invalid || password1.length < 6 || (password1 != password2) || !$scope.validateEmail(email);
    };

    $scope.institution = { evaluator: { birth_date: new Date() } };

    $scope.evaluator = { birth_date: new Date() };

    $scope.onFile = function($files, event){
        event.preventDefault();
        if($files[0].size < 2097152){
            $scope.file = $files[0];
        } else {
            toast.show(
                "El tamaño del archivo es muy grande, recuerde " +
                "que no debe ser mayor a 2MB."
            );
            $scope.file = null;
        }
    };

    $scope.deleteFile = function(){
        $scope.file = null;
    };


    $scope.registerInstitution = function(event, valid){
        event.preventDefault();

        var user = _.omit($scope.institution.evaluator, 'password2');
        user.mail = $scope.institution.mail;
        user.phone_number = $scope.institution.phone_number;

        registerUser(_.omit(user, 'area')).then(function(){
            return Auth.password(user.mail, user.password);
        }).then(function(token){
            return Evaluator.setEvaluator(
                { area: user.area }, token
            ).then(function(){
                return token;
            });
        }).then(function(token){
            return User.getUser(token.token_type, token.access_token);
        }).then(function(user){

            var institution = _.extend(
                _.omit($scope.institution, 'evaluator'),
                { evaluator_id: user.id }
            );
            return Institution.createInstitution(
                institution, $scope.file, Auth.client()
            );
        }).then(function(){
            toast.show(
                "Tu solicitud ha sido recibida exitosamente. " +
                "Revisa en los próximos días si fue aceptada " +
                "o escribenos a ######@#######.com"
            );
            $mdDialog.hide(true);
        }).catch(function(response){
            toast.show(response.error);
        });

    };

    $scope.registerEvaluator = function(event){
        event.preventDefault();

        var user = _.omit($scope.evaluator, 'password2');

        registerUser(_.omit(user, 'area')).then(function(){
            return Auth.password(user.mail, user.password);
        }).then(function(token){
            return Evaluator.setEvaluator(
                { area: user.area }, token
            ).then(function(){
                return token;
            });
        }).then(function(token){
            $mdDialog.hide(false, token);
        }).catch(function(response){
            toast.show(response.error);
        });

    };

});
