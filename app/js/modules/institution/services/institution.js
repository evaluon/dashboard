'use strict';

angular.module('evaluon.institution').factory(
    'Institution',
    function(Auth, api, headers, $http, $upload, localStorageService){

        var utoken = CryptoJS.SHA1(),
            user = Auth.userLogged;

        return {

            listInstitutions: function(){

                return $http({
                    method: 'get',
                    url: api.institution,
                    headers: {
                        Authorization: headers.authorization(
                            user.token_type, user.access_token
                        )
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
                        Authorization: headers.authorization(
                            user.token_type, user.access_token
                        )
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
