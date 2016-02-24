'use strict';

module.exports = function messageItem(Messages){

    return {
        restrict: 'E',
        scope: {
            id: '='
        },
        link: function(scope){
            scope.panel = {
                loading: true,
                errorText: ''
            }
            Messages.getById(scope.id).then(function(message){
                scope.message = message;
                scope.panel.loading = false;
            }, function(e){
                scope.panel.loading = false;
                scope.panel.errorText = e;
            })
        },
        template: require('./item.html')
    }

}