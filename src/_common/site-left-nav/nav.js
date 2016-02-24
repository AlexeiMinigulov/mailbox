'use strict';

module.exports = function loaderDirective(){

    return {
        restrict: 'E',
        scope: {
            activeData: '='
        },
        link: function(scope){
            scope.panel = {
                menu: [
                    {
                        name: 'Messages',
                        state: 'messages'
                    }
                ]
            };
        },
        template: require('./template.html')
    };

};