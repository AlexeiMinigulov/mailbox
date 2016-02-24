'use strict';

require('./styles.css');

module.exports = function denied($timeout, Auth){

    return {
        restrict: 'E',

        link: function(scope){
            scope.user = Auth.user();
        },

        template: require('./denied.html')
    };
}