'use strict';

module.exports = function userEdit(Users, $timeout){

    var errorHideTime = 2000;

    return {
        restrict: 'E',
        scope: {
            id: '='
        },
        link: function(scope){
            scope.panel = {
                title: 'Edit contact',
                loading: true,
                contact: null,
                error: false,
                success: false,
                text: '',
                editUser: function(){

                    if(!this.contact.name){
                        scope.panel.error = true;
                        scope.panel.text = 'Please fill field Name';
                        $timeout(function(){
                            scope.panel.error = false;
                        }, errorHideTime)
                    }else if(!this.contact.username){
                        scope.panel.error = true;
                        scope.panel.text = 'Please fill field Username';
                        $timeout(function(){
                            scope.panel.error = false;
                        }, errorHideTime)
                    }else{
                        Users.saveById(scope.panel.contact);
                        scope.panel.success = true;
                        scope.panel.text = 'Used saved';
                        $timeout(function(){
                            scope.panel.success = false;
                        }, errorHideTime)
                    }

                }
            }
            if(scope.id){
                Users.getById(scope.id).then(function(user){
                    scope.panel.contact = angular.copy(user);
                    scope.panel.loading = false;
                }, function(e){
                    scope.panel.loading = false;
                    scope.panel.errorText = e;
                })
            }else{
                scope.panel.title = 'Add contact';
                scope.panel.loading = false;
                scope.panel.contact = {
                    name: '',
                    username: ''
                };
            }

        },
        template: require('./item.html')
    }

}