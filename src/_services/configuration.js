'use strict';

module.exports = function Configuration(){

        return {

            siteName: 'Apellsin Box',
            copyRight: '© 2016 All right reserved',
            author: 'Anatoly Vasilev',

            getStorageData: function(name){
                try{
                    return JSON.parse(localStorage.getItem(name));
                }catch(e){
                    throw e;
                }
            },

            setStorageData: function(name, value){
                try{
                    localStorage.setItem(name, JSON.stringify(value));
                }catch(e){
                    throw e;
                }
            },

            removeStorageData: function(name, value){
                try{
                    localStorage.removeItem(name);
                }catch(e){
                    throw e;
                }
            }

        }

};