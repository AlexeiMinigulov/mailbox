'use strict';

module.exports = function messagesService($q, $http){

    var messages = [];
    var lastRequestTime = 0;

    return {

        getAll: function(){
            var d = $q.defer();
            if(lastRequestTime && lastRequestTime > Date.now() - 60000){
                d.resolve(messages);
            }else{
                $http.get('http://jsonplaceholder.typicode.com/comments').then(
                    function(data){
                        lastRequestTime = Date.now();
                        messages = data.data.map(function(v, k){
                            v.date = new Date() - 24*3600*1000*Math.random()*k;
                            return v;
                        });
                        d.resolve(messages);
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
            this.getAll().then(function(messages){
                let message = null;
                messages.forEach(function(m){
                    if(m.id == id){
                       message = m;
                    }
                });
                d.resolve(message);
            }, function(err){
                d.reject(err);
            });
            return d.promise;
        }

    }

};