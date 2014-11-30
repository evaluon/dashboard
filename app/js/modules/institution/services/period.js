'use strict';

angular.module('evaluon.institution').factory(
    'Period', function(Auth, Institution, api, headers, $http){

        var user = Auth.userLogged(),
            tokenType = user.token_type,
            token = user.access_token;

        return {

            activePeriods: function(institution){

                return $http({
                    method: 'get',
                    url: api.id(api.period, institution),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            createPeriod: function(institution){

                return $http({
                    method: 'get',
                    url: api.id(api.period, institution),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            groupPeriod: function(group){

                return $http({
                    method: 'get',
                    url: api.groupPeriod(group),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            setPeriod: function(group){

                return $http({
                    method: 'put',
                    url: api.groupPeriod(group),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            updatePeriod: function(period){

                return $http({
                    method: 'put',
                    url: api.period,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: period
                }).then(function(data){
                    return data.data.data;
                });

            }

        }

    }
);
