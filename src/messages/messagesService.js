'use strict';

module.exports = function messagesService($q, $http){

    var messages = [];
    var lastRequestTime = 0;

    return {

        getAll: function(){
            var d = $q.defer();
            if(lastRequestTime && lastRequestTime > Date.now() - 60000 && false){
                d.resolve(messages);
            }else{
                $http.get('/data/messages.json').then(
                    function(data){
                        messages = data.data;
                        lastRequestTime = Date.now();
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