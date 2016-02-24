'use strict';

require('./styles.css');

module.exports = function(app){

    app.directive('siteFooter', require('./footer'));

}