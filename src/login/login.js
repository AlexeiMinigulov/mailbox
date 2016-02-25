'use strict';

require('./styles.css');

module.exports = function login($timeout, $state, Auth){

    let errorHideTime = 3000;

    return {
        restrict: 'E',

        link: function(scope){

            var panel = scope.panel = {
                loginField: 'admin',
                passwordField: 'admin',
                loading: false,
                user: null
            };
            panel.login = function(){
                panel.loading = true;
                Auth.login(panel.loginField, panel.passwordField).then(
                    function(user){
                        panel.loading = false;
                        panel.user = user;
                        $state.go('home');
                    },
                    function(errorText){
                        panel.loading = false;
                        panel.error = true;
                        panel.errorText = errorText;
                        $timeout(function(){
                            panel.error = false;
                        }, errorHideTime)
                    }
                );
            }
        },

        template: require('./login.html')
    };
}