'use strict';

angular.module('evaluon.evaluator').factory(
    'Question', function(Auth, api, headers, $upload, $http){

        return {

            listBank: function(){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.question,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            createQuestion: function(question){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.question,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: question
                }).then(function(data){

                    return data.data.data;
                });

            },

            uploadQuestionImage: function(question, image){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $upload.upload({
                    method: 'put',
                    url: api.questionImage(question),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    data: {
                        description: image.description
                    },
                    file: image.location
                }).then(function(result){
                    return result.data.data;
                });

            },


            listKnowledgeAreas: function(unapproved){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.knowledgeArea,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    params: {
                        unapproved: unapproved || false
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            createKnowledgeArea: function(area){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.knowledgeArea,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: area
                }).then(function(response){
                    return response.data.data;
                });

            },

            approveKnowledgeArea: function(id){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.id(api.knowledgeArea, id),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(response){
                    return response.data.data;
                });

            },

            denyKnowledgeArea: function(id, reason){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'delete',
                    url: api.id(api.knowledgeArea, id),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        denial_reason: reason
                    }
                }).then(function(response){
                    return response.data.data;
                });

            }

        };

    }
);
