'use strict';

var apiRouter = {

    images: function(container, path){
        return 'http://186.154.240.187:1045/{1}'.format(container, path);
    },
    url: {
        protocol: 'http',
        host: '186.154.240.187:3004'
    },
    route: function(path){
        var url = this.url;
        return '{0}://{1}/{2}'.format(url.protocol, url.host, path);
    },
    id: function(url, id){
        return '{0}/{1}'.format(url, id);
    }
};

angular.module('evaluon').constant(
    'api', {

        // Root: url id
        id: apiRouter.id,

        // Authorization Module
        token: apiRouter.route('auth/token'),

        // Users Module
        user: apiRouter.route('user'),
        adminUser: apiRouter.route('user/admin'),

        // Institutions Module
        institution: apiRouter.route('institution'),

        // Evaluators Module
        evaluator: apiRouter.route('evaluator'),
        evaluatorGroup: apiRouter.route('evaluator/group'),

        // Evaluees Module
        evaluee: apiRouter.route('evaluee'),
        evalueeDescription: apiRouter.route('evaluee/description'),

        // Groups module
        group: apiRouter.route('group'),
        groupPeriod: function(group){
            return apiRouter.route('group/{0}/period'.format(group));
        },
        groupEvaluee: apiRouter.route('evaluee/group'),
        groupEvaluees: function(group){
            return apiRouter.route('group/{0}/evaluee'.format(group));
        },

        // Periods Module
        period: apiRouter.route('period'),

        // Test Module
        test: apiRouter.route('test'),
        testGroup: apiRouter.route('test/group'),
        evalueesInTest: apiRouter.route('evaluee/test'),

        // Answers Module
        knowledgeArea: apiRouter.route('knowledgearea'),
        answer: apiRouter.route('answer'),
        answerId: function(answer){
            return apiRouter.route('answers/{0}'.format(answer));
        },
        addToQuestion: function(q, a){
            return apiRouter.route('question/{0}/answer/{1}'.format(q, a));
        },
        testQuestion: function(id){
            return apiRouter.route('test/{0}/question'.format(id));
        },
        question: apiRouter.route('question'),
        editQuestion: function (question) {
            return apiRouter.route('questions/{0}'.format(question));
        },
        questionImage: function(id){
            return apiRouter.route('question/{0}/image'.format(id));
        },
        testResults: function(id){ 
            return apiRouter.route('test/{0}/results'.format(id));
        },
        testFeedback: function(id){
            return apiRouter.route('test/{0}/feedback'.format(id));
        }

    }
).constant(
    'images', {
        evaluon: function(path) { return apiRouter.images('evaluon', path); }
    }
);

(function(){

    angular
        .module('evaluon')
        .value('imgUrlBase', 'http://186.154.240.187:1045')
        .filter('image', image);

    function image(imgUrlBase) {
        return function(img){
            return '{0}/{1}'.format(imgUrlBase, img);
        };
    }
})();
