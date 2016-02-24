'use strict';

module.exports = function Auth($q, $http, Configuration) {

    var user = Configuration.getStorageData('user');

    return {

        login: function (login, password) {
            var d = $q.defer();
            if (login == 'admin' && password == 'admin') {
                $http.get('http://jsonplaceholder.typicode.com/users/1').then(
                    function (data) {
                        user = data.data;
                        Configuration.setStorageData('user', user);
                        d.resolve(user);
                    }, function (error) {
                        d.reject(error)
                    }
                );
            } else {
                d.reject("Sorry, we can't find user with this login and password!")
            }
            return d.promise;
        },

        logout: function () {
            Configuration.removeStorageData('user');
            user = null;
        },

        user: function () {
            return user;
        }

    };

};