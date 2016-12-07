var supports_tls = require('./tls/tls');
var fs = require('fs');

fs.readFile('./data/input.txt', 'utf8', function (err,ips) {
    var ip_list = ips.split('\n');
    var abba_count = 0;
    var aba_count = 0;
    for (var i=0 ; i < ip_list.length; i++ ){
        if(supports_tls(ip_list[i])) abba_count++;
    }
    console.log("ABBA Count: ", abba_count)
    console.log("ABA Count: ", aba_count)
});