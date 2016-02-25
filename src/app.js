'use strict';

var app = angular.module('app', ['ui.router']);

app.config(function($urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
});

// services
app.service('Configuration', require('./_services/configuration'));
app.service('Auth', require('./_services/auth'));

// common
require('./_common/site-header')(app);
require('./_common/site-container')(app);
require('./_common/site-footer')(app);
require('./_common/site-loader')(app);
require('./_common/site-horizontal-loader')(app);
require('./_common/site-message')(app);
require('./_common/site-left-nav')(app);

// modules
require('./home')(app);
require('./login')(app);
require('./denied')(app);
require('./messages')(app);
require('./users')(app);

app.run(function($rootScope, Auth, $state){
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams, options){
            if(toState.name == 'login' && Auth.user()){
                event.preventDefault();
            }
            if(toState.data && toState.data.login && !Auth.user()){
                event.preventDefault();
                $state.go('denied');
            }
        })
})