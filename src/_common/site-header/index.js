'use strict';

require('./styles.css');

module.exports = function(app){

    app.directive('siteHeader', require('./header'));

}