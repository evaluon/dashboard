'use strict';

angular.module('evaluon').factory(
    'Interceptor', function($q){

        return {

            responseError: function(response) {

                var message;

                console.log(response);

                var errors = {
                    400: {
                        missing_fields: 'Solicitud incompleta'
                    },
                    403: {
                        invalid_permissions: 'No tienes permiso para acceder a estos recursos.',
                        is_evaluee: "Imposible realizar acción. Es un estudiante.",
                        not_an_evaluee: "Imposible realizar acción. No es un docente.",
                        is_evaluator: "Imposible realizar acción. Es un docente.",
                        not_an_evaluator: "Imposible realizar acción. No es un docente.",
                        not_evaluees: "Alguno de los usuarios no es un estudiante.",
                        test_unopened: "Este test aún no está abierto",
                        unabled_institution: "Imposible realizar acción sobre esta institución.",
                        insuficient_privileges: 'No tienes permiso para acceder a estos recursos',
                        invalid_hotp_code: 'Clave de acceso inválida',
                        invalid_grant: 'Usuario y contraseña no coinciden',
                        access_denied: 'Usuario bloqueado',
                        already_opened_test: 'El test que intenta abrir ya ha sido abierto',
                        existing_user: 'El usuario ya existe'
                    },
                    404: {
                        no_active_groups: 'No hay grupos activos',
                        question_not_found: 'La pregunta que busca no existe',
                        no_active_period: 'No hay algún un periodo activo para este grupo',
                        no_active_test: 'No hay test activos para este grupo',
                        test_unavailable: 'La prueba seleccionada no está disponible',
                        client_not_found: "Cliente de aplicación no encontrado",
                        results_not_found: "Los resultados del evaluado son muy pocos para hacer una estadística o no se encontraron. Posiblemente el evaluado es inválido",
                        no_questions_available: "No hay preguntas disponibles"
                    }
                };

                if(errors[response.status]){
                    if(errors[response.status][response.data.error.message]){
                        message = errors[response.status][response.data.error.message];
                    }
                    else if(errors[response.status][response.data.error]){
                        message = errors[response.status][response.data.error];
                    }
                    else{
                        message = 'Error desconocido, si este persiste contacte al administrador';
                    }
                }
                else if(response.status == 500){

                    if(response.data.error_description == 'user_not_found'){
                        message = 'Usuario y contraseña no coinciden';
                    }
                    else if(response.data.error_description == 'blocked_user'){
                        message = 'Usuario bloqueado';
                    }
                    else{
                        message = "Ha ocurrido un error en el servidor";
                    }
                }
                else if(response.status == 0){
                    message = "No hay conección a internet";
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
