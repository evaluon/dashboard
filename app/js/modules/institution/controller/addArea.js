'use strict';

angular.module('evaluon.institution').controller(
    'AddAreaCtrl', function($scope, toast, Question){

        $scope.add = function($event, data){
            $event.preventDefault();

            Question.createKnowledgeArea(data).then(function(){
                toast.show();
            }).catch(function(response){
                toast.show(response.error);
            });

        };
    }
);
