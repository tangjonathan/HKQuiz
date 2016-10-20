var configValues = require('./config')

module.exports = {
    
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.username + ":" + configValues.password + "@ds061506.mlab.com:61506/firstnodeappdb";
    }
}