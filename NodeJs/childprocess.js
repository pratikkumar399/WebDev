let cp = require("child_process");
console.log("trying to open ");
// cp.execSync("calc"); 
cp.execSync("start chrome https://www.youtube.com/");
console.log("opened calculator");