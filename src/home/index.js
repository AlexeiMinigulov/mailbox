'use strict';

module.exports = function(app){

    app.config(function($stateProvider){

        $stateProvider.state('home', {
            url: '/home',
            template: '<home />',
        });

    });

    app.directive('home', require('./home'));

};