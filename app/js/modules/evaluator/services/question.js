'use strict';

angular.module('evaluon.evaluator').factory(
    'Question', function(Auth, api, headers, $http){

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
<<<<<<< HEAD
                });
=======
                })
>>>>>>> 3ceab2fd838d3f344805e4ea4ed3fce52cb5cbee

            }

        };

    }
);
