'use strict';

angular.module('evaluon.institution').factory(
    'Institution',
    function(Auth, api, headers, $upload, $http, localStorageService){

        if(Auth.userLogged()){
            var user = Auth.userLogged(),
            tokenType = user.token_type,
            token = user.access_token;
        }

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

            unapprovedInstitutions: function(){

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

                tokenType = token.token_type || tokenType;
                token = token.access_token || token;

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
