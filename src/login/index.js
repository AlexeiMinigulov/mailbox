'use strict';

module.exports = function(app){

    app.config(function($stateProvider){

        $stateProvider.state('login', {
            url: '/login',
            template: '<login />',
        }).state('logout', {
            url: '/logout',
            data: {
                login: true
            },
            controller: function($scope, Auth, $state){
                Auth.logout();
                $state.go('home');
            }
        });

    });

    app.directive('login', require('./login'));

};