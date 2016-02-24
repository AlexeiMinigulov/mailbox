'use strict';

module.exports = function siteHeader(Configuration){

    return {
        restrict: 'E',
        replace: true,
        scope: {},
        link: function(scope){
            scope.panel = {
                copy: Configuration.copyRight,
                author: Configuration.author
            };
        },
        template: require('./template.html')
    };

};