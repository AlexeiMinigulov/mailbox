'use strict';

module.exports = function siteMessage(){

    return {
        restrict: 'E',
        transclude: true,
        scope: {
            type: '@'
        },
        link: function(scope){
          var type = (scope.type)?scope.type:'info';
          scope.panel = {};
          switch(type){
              case 'error':
                  scope.panel.type = 'red-text';
                  break;
              case 'success':
                  scope.panel.type = 'green-text';
                  break;
              default:
                  scope.panel.type = 'blue-text';
                  break;
          }
        },
        template: '<div class="site-message {{panel.type}}" ng-transclude></div>'
    };

}