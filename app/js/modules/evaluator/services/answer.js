'use strict';

angular.module('evaluon.evaluator').factory(
    'Answer', function(Auth, api, headers, $http){

        return {

            registerAnswers: function(answers){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.answer,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: answers
                }).then(function(data){
                    return data.data.data;
                });

            },

            addToQuestion: function(question, answer){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.addToQuestion(question, answer),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data;
                });

            },

            score: function(answer, mark){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.id(api.answer, answer),

                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        mark: mark
                    }
                })

            }

        }

    }
)
