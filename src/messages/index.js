'use strict';

require('./styles.css');

module.exports = function(app){

    app.config(function($stateProvider){

        $stateProvider
            .state('messages', {
                template: '<messages />',
                data: {
                    login: true
                }
            }).state('messages.list', {
                url: '/messages',
                template: '<messages-list />',
            }).state('messages.item', {
                url: "/messages/item/:messageId",
                templateProvider: function ($timeout, $stateParams) {
                    return $timeout(function () {
                        return '<message-item id="'+$stateParams.messageId+'"></message-item>'
                    }, 100);
                }
            });

    });

    app.directive('messages', require('./messages'));
    app.directive('messagesList', require('./list/index.js'));
    app.directive('messageItem', require('./item/index.js'));
    app.service('Messages', require('./messagesService'));

}