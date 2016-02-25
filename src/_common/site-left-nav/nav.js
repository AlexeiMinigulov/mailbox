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
                    },
                    {
                        name: 'Contacts',
                        state: 'contacts'
                    }
                ]
            };
        },
        template: require('./template.html')
    };

};