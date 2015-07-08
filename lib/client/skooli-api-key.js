//
// ### Client credentials flow implementation
//
var winston = require('winston');
module.exports = function(config) {

    var core   = require('./../core')(config);

    //
    // ### Returns the Access Token object.
    //
    // * `params.scope` - A String that represents the application privileges.
    // * `callback` - The callback function returning the results.
    // An error object is passed as first argument and the result as last.
    //
    function getToken(params, callback) {
        params.grant_type = 'http://skooli.com/grants/api_key';
        core.api('GET', config.tokenPath, params, callback);
    }


    return {
        'getToken' : getToken
    }
};
