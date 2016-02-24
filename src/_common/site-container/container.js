'use strict';

module.exports = function siteHeader(Configuration){

    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            user: '='
        },
        link: function(scope){
            scope.panel = {
                title: Configuration.siteName,
                user: scope.user
            };
        },
        template: require('./template.html')
    };

};