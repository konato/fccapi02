'use strict';

function getIp(req){
    var user_ip = null; 
    if (req.headers['x-forwarded-for']) { 
        user_ip = req.headers['x-forwarded-for'].split(', ')[0]; 
    } 
    user_ip = user_ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    return user_ip;
}

function getSoftware(req){
    var agent = null;
    var expression = /\(([^\)]*)\)/;
    agent = expression.exec(req.headers['user-agent']);
    return agent[1];
}

function getUserLanguage(req){
    var lang = null;
    lang = req.headers['accept-language'].split(',')[0];
    return lang;
}


function RequestHeaderApi() {
   
   this.getJson = function (req, res) {
        var dtJson = { "ipaddress": null, "language": null, "software":null };
        // analyse header
        console.log(req.headers);
        dtJson.ipaddress = getIp(req);
        dtJson.software = getSoftware(req);
        dtJson.language = getUserLanguage(req);
        res.json(dtJson);
   }

};

module.exports = RequestHeaderApi;
