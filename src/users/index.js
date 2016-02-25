'use strict';

require('./styles.css');

module.exports = function(app){

    app.config(function($stateProvider){

        $stateProvider
            .state('contacts', {
                template: '<users />',
                data: {
                    login: true
                }
            }).state('contacts.list', {
                url: '/contacts',
                template: '<users-list />',
            }).state('contacts.edit', {
            url: "/contacts/edit/:userId",
            templateProvider: function ($timeout, $stateParams) {
                return $timeout(function () {
                    return '<user-edit id="'+$stateParams.userId+'"></user-edit>'
                }, 100);
            }
        });

    });

    app.directive('users', require('./users'));
    app.directive('usersList', require('./list/index.js'));
    app.directive('userEdit', require('./edit/index.js'));
    app.service('Users', require('./usersService.js'));

}