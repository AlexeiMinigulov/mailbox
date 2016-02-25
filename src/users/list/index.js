'use strict';

module.exports = function messagesList(Users){

    return {
        restrict: 'E',
        link: function(scope){
            scope.users = [];
            scope.panel = {
                loading: true,
                errorText: '',
                leftMenuData: {
                    item: 'contacts'
                }
            }
            Users.getAll().then(
                function(users){
                    scope.users = users;
                    scope.panel.leftMenuData.count = users.length;
                    scope.panel.loading = false;
                },
                function(error){
                    scope.panel.loading = false;
                    scope.panel.errorText = e;
                }
            );
        },
        template: require('./list.html')
    }

}