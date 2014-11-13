'use strict';

angular.module('evaluon.auth').factory('Auth', function(api, access, $http){

    return {

        clientCredentials: function(){

            return $http({
                method: 'post',
                url: api.token,
                data: access.client
            }).then(function(data){
                console.log(data);
            }).catch(function(error){
                console.log(error);
            });

        }


    };


});
