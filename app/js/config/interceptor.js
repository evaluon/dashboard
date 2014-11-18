'use strict';

angular.module('evaluon').factory(
    'Interceptor', function($q){
        return {
            responseError: function(response) {

                console.error("Whoops!");
                var errors = {};
                response.error = errors[response.statusText];
                return $q.reject(response);
            }
        };
    }
);
