'use strict';

module.exports = function siteHeader(Configuration){

    return {
        restrict: 'E',
        replace: true,
        scope: {
            user: '='
        },
        link: function(scope){
            scope.panel = {
                title: Configuration.siteName
            };
        },
        template: require('./template.html')
    };

};