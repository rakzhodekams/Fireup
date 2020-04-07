// Check information about the Operation System 
// In reference to: https://nodejs.org/api/os.html
var os = require('os');
console.log('This will show all information about this host');
console.log('This Machine name is: '+os.hostname());
console.log('Operating System Arch: '+os.arch());
console.log('Operating System Type: '+os.type());
console.log('Operating System Platform: '+os.platform());
console.log('Operating System Release: '+os.release());
console.log('--------------------------');
console.log('Operating System upTime: '+os.uptime());
console.log('Operating System Load: '+os.loadavg());
console.log('Operating System Total Memory: '+os.totalmem());
console.log('Operating System Free Memory: '+os.freemem());
console.log('Operating System CPU information: '+os.cpus()); // This return a Object 
console.log('Operating System Network Cards: '+os.networkInterfaces()); // This return a Object 
console.log('Operating System Temporary Folder: '+os.tmpdir());
console.log('--------------------------');

