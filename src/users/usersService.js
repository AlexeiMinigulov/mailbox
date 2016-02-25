'use strict';

module.exports = function usersService($q, $http, Configuration){

    var users = Configuration.getStorageData('users');

    return {

        getAll: function(){
            var d = $q.defer();
            if(users && users[0]){
                d.resolve(users);
            }else{
                $http.get('/data/users.json').then(
                    function(data){
                        users = data.data;
                        Configuration.setStorageData('users', users);
                        d.resolve(users);
                    },
                    function(error){
                        d.reject(error);
                    }
                );
            }
            return d.promise;
        },

        getById: function(id){
            let d = $q.defer();
            this.getAll().then(function(users){
                let user = null;
                users.forEach(function(m){
                    if(m.id == id){
                       user = m;
                    }
                });
                d.resolve(user);
            }, function(err){
                d.reject(err);
            });
            return d.promise;
        },

        saveById: function(userFields){
            let d = $q.defer();
            this.getAll().then(function(users){
                if(userFields.id){
                    users.forEach(function(m){
                        if(m.id == userFields.id){
                            m.name = userFields.name;
                            m.username = userFields.username;
                        }
                    });
                }else{
                    users.push({
                        id: users.length,
                        name: userFields.name,
                        username: userFields.username
                    });
                }

                Configuration.setStorageData('users', users);
                d.resolve();
            }, function(err){
                d.reject(err);
            });
            return d.promise;
        }

    }

};