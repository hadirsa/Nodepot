/**
 * Created by mschmall on 09/02/14.
 */


var url = require("url");
var db = require("./db");


/** analyze the request **/
function analyze(request)
{
    var path = url.parse(request.url).path;
    var query = url.parse(request.url).query;
    console.log("Found request to URI " + path);

    console.log("Found path: " + path);
    console.log("Found query: " + query);

    return 1;

}


/** exports of the module **/
exports.analyze=analyze