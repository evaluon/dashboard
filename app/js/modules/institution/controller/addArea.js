'use strict';

angular.module('evaluon.institution').controller(
    'AddAreaCtrl', function($scope, toast, Question, $mdDialog){

        $scope.getKnowledgeAreas = function(){

            Question.listKnowledgeAreas().then(function(success){
                $scope.knowledgeAreas = success;
            }).catch(function(response){
                toast.show(response.message);
            });

        };
        
        $scope.getKnowledgeAreas();

        $scope.add = function($event, data){
            $event.preventDefault();

            data = _.extend({ image_id: 1 }, data);

            Question.createKnowledgeArea(data).then(function(){
                toast.showSuccess();
                $mdDialog.hide();
            }).catch(function(response){
                toast.show(response.error);
            });

        };
    }
);
