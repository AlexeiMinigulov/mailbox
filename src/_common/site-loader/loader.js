'use strict';

module.exports = function loaderDirective(){

    return {
        restrict: 'E',
        template: require('./template.html')
    };

};