var supports_tls = require('./tls');
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function (err,ips) {
    var ip_list = ips.split('\n');
    var count = 0;
    for (var i=0 ; i < ip_list.length; i++ ){
        if(supports_tls(ip_list[i])) count++;
    }
    console.log(count)
});