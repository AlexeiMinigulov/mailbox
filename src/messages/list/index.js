'use strict';

module.exports = function messagesList(Messages){

    return {
        restrict: 'E',
        link: function(scope){
            scope.messages = [];
            scope.panel = {
                loading: true,
                errorText: '',
                leftMenuData: {
                    item: 'messages'
                }
            }
            Messages.getAll().then(
                function(messages){
                    scope.messages = messages;
                    scope.panel.leftMenuData.count = messages.length;
                    scope.panel.loading = false;
                },
                function(error){
                    scope.panel.loading = false;
                    scope.panel.errorText = e;
                }
            );
        },
        template: require('./list.html')
    }

}