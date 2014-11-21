'use strict';

angular.module('evaluon.institution').factory(
    'Institution',
    function(Auth, api, headers, $upload, $http, localStorageService){

        var user = Auth.userLogged(),
            tokenType = user.token_type,
            token = user.access_token;

        return {

            activeInstitution: function(){

                return $http({
                    method: 'get',
                    url: api.user,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(result){
                    if(result.data.data.role == 4){
                        return result.data.data.institution_id;
                    } else {
                        throw {
                            message: "insuficient_privileges"
                        };
                    }
                });

            },

            listInstitutions: function(){

                return $http({
                    method: 'get',
                    url: api.institution,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(result){
                    return result.data;
                });

            },

            createInstitution: function(institution, file){

                return $upload.upload({
                    method: 'post',
                    url: api.institution,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    data: institution,
                    file: file
                }).then(function(result){
                    return result.data.data;
                });

            }

        }

    }
);
