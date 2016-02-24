'use strict';

module.exports = function(app){
    app.directive('siteLoader', require('./loader'));
}