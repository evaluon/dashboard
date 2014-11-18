'use strict';

angular.module('evaluon').factory(
    'Interceptor', function($q){

        return {

            responseError: function(response) {

                var message = (response.code >= 500 ?
                    "Ha ocurrido un error en el servidor" :
                    (response.code >= 400 ?
                        "Error conocido" : "Error desconocido"
                    )
                );

                response.error = message;
                return $q.reject(response);

            }

        };

    }
);
