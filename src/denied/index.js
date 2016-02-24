'use strict';

module.exports = function(app){

    app.config(function($stateProvider){

        $stateProvider.state('denied', {
            url: '/denied',
            template: '<denied />',
        });

    });

    app.directive('denied', require('./denied'));

};