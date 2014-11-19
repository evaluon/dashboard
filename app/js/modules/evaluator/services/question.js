'use strict';

angular.module('evaluon.evaluator').factory(
    'Question', function(Auth, api, headers, $upload, $http){

        var user = Auth.userLogged,
            tokenType = user.token_type,
            token = user.access_token;

        return {

            listKnowledgeAreas: function(){

                return $http({
                    method: 'get',
                    url: api.knowledgeArea,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            createQuestion: function(question){

                return $http({
                    method: 'post',
                    url: api.question,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    data: question
                }).then(function(data){
                    return data.data.data;
                });

            },

            uploadQuestionImage: function(question, image){

                return $upload.upload({
                    method: 'post',
                    url: api.questionImage(question),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    data: {
                        question: question,
                        description: image.description
                    },
                    file: image.location
                }).then(function(result){
                    return result.data.data;
                });

            }

        };

    }
);
