//filesystem 
// files ->  create read update delete 
let fs = require("fs");
// read 
// let buffer = fs.readFileSync("osmodule.js");
// create    
// fs.openSync("abc.txt", "w");
// fs.writeFileSync("abcs.txt", "Hum node krrhey hai ");
// to update
// fs.appendFileSync("abcs.txt", "Bhai ache se code krna sikh lo ");
// to make a directory
// fs.mkdirSync("merifolder");
// fs.writeFileSync("merifolder/merifile.txt", "Content dekh lo")
// let content = fs.readdirSync("E:\CoderISP\WebBootCamp\merifolder");
// console.log(content);
// for (let i = 0; i < content.length; i++) {
//     console.log(content[i], "is removed");
//     fs.unlinkSync("merifolder/", content);
// }
// fs.rmdirSync("merifolder");
// fs.existSync -> if a file exist at a path then return  true else false 
//fs.lstatSync -> 
for (let i = 0; i <= 5; i++) {
    let dirPathtomake = `Lecture-${i}`;
    fs.mkdirSync(dirPathtomake);
    fs.writeFileSync(dirPathtomake + "\\" + "readme.md", `# readme for ${dirPathtomake}`);
}

// console.log("buffer" + buffer);