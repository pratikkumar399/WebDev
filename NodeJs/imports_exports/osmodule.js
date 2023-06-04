const os = require('os');

console.log(os.platform()); // Returns the platform (e.g., 'win32', 'darwin', 'linux')
console.log(os.arch()); // Returns the CPU architecture (e.g., 'x64', 'arm')
console.log(os.hostname()); // Returns the hostname of the operating system
console.log(os.release()); // Returns the release version of the operating system
console.log(os.type()); // Returns the operating system name (e.g., 'Windows_NT', 'Darwin', 'Linux')

const uptime = os.uptime();
console.log(uptime / 60 / 60); // Returns the system uptime in seconds


console.log(os.totalmem() / 1024); // Returns the total system memory in bytes
console.log(os.freemem()); // Returns the amount of free system memory in bytes
