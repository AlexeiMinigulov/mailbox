'use strict';

require('./style.css');

module.exports = function(app){
    app.directive('siteLeftNav', require('./nav'));
}