var crypto = require('crypto');
var mykey = crypto.createDecipher('aes-128-cbc', 'MySuperSecretPassword');
var mystr = mykey.update('9af5a39822e96bc937a90ee6aaec7bef1a8b6a2e236fac88387cafa5cfc0bfe7752e2906c48d841b4c00cf058dcc5c5b', 'hex', 'utf8');
mystr += mykey.final('utf8');
console.log(mystr);  // This should result in a PURE clear TEXT 
// This module is getting an Error >> Verify when is possible to fix it
