'use strict';

angular.module('evaluon.institution').factory(
    'Institution',
    function(Auth, api, headers, $upload, $http, localStorageService){

        return {

            activeInstitution: function(){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

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

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

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

            unapprovedInstitutions: function(){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.institution,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    params: {
                        unapproved: true
                    }
                }).then(function(result){
                    return result.data.data;
                });

            },

            createInstitution: function(institution, file, token){

                var tokenType = token.token_type,
                    token = token.access_token;

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

            },

            approveInstitution: function(institutionId){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.id(api.institution, institutionId),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        approved: true
                    }
                }).then(function(result){
                    return result.data.data;
                });

            },

            denyInstitution: function(institutionId, reason){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.id(api.institution, institutionId),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        denial_reason: reason
                    }
                }).then(function(result){
                    return result.data.data;
                });

            }



        }

    }
);
