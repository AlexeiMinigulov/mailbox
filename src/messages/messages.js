'use strict';

module.exports = function messages(Auth){
    return {
        restrict: 'E',
        scope: {},
        link: function(scope){
            scope.user = Auth.user();
        },
        template: require('./message.html')
    }
}