// encrypt clear TEXT ( keep it safe ) 
// If this code goes into some Server, no one can read it, 
// So the text we wish to encrypt will be safe? Let's Hope it does!
var crypto = require('crypto');
var mykey = crypto.createCipher('aes-128-cbc', 'UltraSecretPassword'); // createCipher is out-of-date. USE createCipheriv() insteed 
var mystr = mykey.update('This is the Text I wish to hide from everyone', 'utf8', 'hex');
mystr += mykey.final('hex');
console.log(mystr); // This will generate "random DATA" >> Is what we wish to save << 
