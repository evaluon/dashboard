'use strict';

angular.module('evaluon').factory(
    'Interceptor', function($q){

        return {

            responseError: function(response) {

                var message;

                var errors = {
                    400: {
                        missing_fields: 'Solicitud incompleta'
                    },
                    403: {
                        invalid_permissions: 'No tienes permiso para acceder a estos recursos.',
                        is_evaluee: "User tries to identify itself as an evaluee, but it's not.",
                        not_an_evaluee: "User tries to make a request enabled for evaluees, but is an evaluator.",
                        is_evaluator: "User tries to identify itself as an evaluator, but it's not.",
                        not_an_evaluator: "User tries to make a request enabled for evaluators, but is an evaluee.",
                        not_evaluees: "Some users try to identify themselves as evaluees, but they are not.",
                        test_unopened: "Este test aún no está abierto",
                        unabled_institution: "User tries to do an operation over an existing institution where isn't related to.",
                        insuficient_privileges: 'No tienes permiso para acceder a estos recursos',
                        invalid_hotp_code: 'Clave de acceso inválida',
                        invalid_grant: 'Usuario y contraseña no coinciden'
                    },
                    404: {
                        no_active_groups: 'No hay grupos activos',
                        no_active_period: 'No hay algún un periodo activo para este grupo',
                        no_active_test: 'No hay test activos para este grupo',
                        test_unavailable: 'La prueba seleccionada no está disponible',
                        client_not_found: "Cliente de aplicación no encontrado",
                        results_not_found: "Los resultados del evaluado son muy pocos para hacer una estadística o no se encontraron. Posiblemente el evaluado es inválido"
                    }
                };

                if(response.status == 500){
                    messsage = "Ha ocurrido un error en el servidor";
                }
                else if(errors[response.status]){
                    if(errors[response.status][response.data.error]){
                        message = errors[response.status][response.data.error];
                    }
                    else{
                        message = 'Error desconocido, si este persiste contacte al administrador';
                    }
                }
                else{
                    message = 'Error desconocido, si este persiste contacte al administrador';
                }

                response.error = message;
                return $q.reject(response);

            }

        };

    }
);
