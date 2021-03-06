'use strict';

angular.module('evaluon')
.constant(
    'headers', {
        urlencoded: 'application/x-www-form-urlencoded',
        json: 'application/json',
        authorization: function(t, k) { return '{0} {1}'.format(t, k) }
    }
)
.constant(
    'tokens', {
        client: 'dlav4218f',
        user: 'ial83lcv',
        params: '4kgnwlk34',
        redirect: 'a34rafas'
    }
)
.constant(
    'access', {
        client: {
            grant_type: 'client_credentials',
            client_id: 'administrator',
            client_secret: 'kv0Ls8xoIFPdE2GXMK5fodQsAEBV5GzzINZOA0NX99E='
        },
        password: function(user, password){
            return {
                grant_type: 'password',
                username: user,
                password: CryptoJS.SHA1(password).toString()
            }
        },
        refresh: function(refresh_token){

            return  {
                grant_type: 'refresh_token',
                refresh_token: refresh_token
            }

        }
    }
);
