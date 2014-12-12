'use strict';

angular.module('evaluon.evaluator').factory(
    'Test', function(Auth, api, headers, $http){

        return {

            testDetail: function(id){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.id(api.test, id),
                    headers: {
                        Ahthorization: headers.authorization(tokenType, token)
                    }
                }).then(function(test){
                    return data.data.data;
                });

            },

            evalueesInTest: function(group, test){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.evalueesInTest,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    params: {
                        group: group,
                        test: test
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            createTest: function(test){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.test,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: test
                }).then(function(data){
                    return data.data.data;
                });

            },

            updateTest: function(id, test){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.id(api.test, id),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: test
                }).then(function(data){
                    return data.data.data;
                });

            },

            addQuestion: function(test, question){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.testQuestion(test),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        question_id: question
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            testResults: function(test, evaluee){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.testResults(test),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    },
                    params: {
                        evaluee: evaluee
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            feedback: function(user, test, feedback){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.testFeedback(test),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        user: user,
                        feedback: feedback
                    }
                }).then(function(data){
                    return data.data.data;
                });

            }

        }

    }
);
