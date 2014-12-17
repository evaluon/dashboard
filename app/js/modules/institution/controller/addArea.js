'use strict';

angular.module('evaluon.institution').controller(
    'AddAreaCtrl', function($scope, toast, Question){

        $scope.add = function($event, data){
            $event.preventDefault();

            data = _.extend({ image_id: 1 }, data);

            Question.createKnowledgeArea(data).then(function(){
                toast.showSuccess();
            }).catch(function(response){
                toast.show(response.error);
            });

        };
    }
);
