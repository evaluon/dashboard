'use strict';

var apiRouter = {

    images: function(container, path){
        return 'http://cdn.boolinc.co/{0}/{1}'.format(container, path);
    },
    url: {
        protocol: 'http',
        host: 'localhost:3004'
    },
    route: function(path){
        var url = this.url;
        return '{0}://{1}/{2}'.format(url.protocol, url.host, path);
    },
    id: function(url, id){
        return '{0}/{1}'.format(url, id)
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
        groupEvaluees: function(group){
            return apiRouter.route('group/{0}/evaluee'.format(group));
        },

        // Test Module
        test: apiRouter.route('test'),
        testGroup: apiRouter.route('test/group'),
        evalueesInTest: function(t, g) {
            return apiRouter.route('test/{0}/{1}'.format(t,g));
        },

        // Answers Module
        knowledgeArea: apiRouter.route('knowledgearea'),
        answer: apiRouter.route('answer')



    }
).constant(
    'images', {
        evaluon: function(path) { return apiRouter.images('evaluon', path); }
    }
);
