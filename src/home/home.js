'use strict';

require('./styles.css');

module.exports = function home($timeout, Auth){

    return {
        restrict: 'E',

        link: function(scope){
            scope.user = Auth.user();
        },

        template: require('./home.html')
    };
}