// Check DNS information using NodeJS ( IP Address ) 
// For more details check NodeJS builtin Modules for DNS proprieties
// ofs = OdicforceSounds.com
var dns = require('dns');
var ofs = dns.lookup('odicforcesounds.com', function (err, addresses, family){
        console.log(addresses);
});

