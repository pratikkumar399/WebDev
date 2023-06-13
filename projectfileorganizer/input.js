#!/usr/bin/env node

let inputArr = process.argv.slice(2);
let fs = require('fs');
let path = require('path');
// console.log(inputArr);
//node input.jstree "directoryPath"
// node input.js organize "directory Path"
//node input.js  help
let command = inputArr[0];
let types = {
    images: ["jpeg", "png"],
    archives: ["zip", "osp"],
    media: ["mp4", "mkv", "mp3"],
    docs: ["docx", "pdf", "txt"],
    software: ["exe", "pkg", "msi"]
}
switch (command) {
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizationFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Unknown  command");
}

function treeFn(dirPath) {
    // let destPath;
    if (dirPath == undefined) {
        treeHelper(process.cwd(), " ");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, " ");
        } else {
            console.log("Please enter the correct path");
            return;
        }

    }
}

function treeHelper(dirPath, indent) {
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "|---" + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + "|___" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}





function organizationFn(dirPath) {
    // console.log("Organization command implemented for " + dirPath);
    // 1 . input -> directory path given '
    let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd();
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            // 2 . create ->organized   files -> in a directory
            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("Please enter the correct path");
            return;
        }

    }
    organizeHelp(dirPath, destPath);
    // now we have to identify all the files present in that input directory , actually find out the type of files they are so that we can organize them into
    // required category 
}

function organizeHelp(src, dest) {
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            // console.log(childNames[i]);
            let category = getCatergory(childNames[i]);
            // console.log(childNames[i], "belongs to this category -> ", category);
            // 4.copy/ cut that folder inside  of the organised folder from that cateory  
            sendFiles(childAddress, dest, category);
        }
    }
}

function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to -> ", category);
}




function helpFn(dirPath) {
    console.log(`List of all commands :
                        node input.jstree "directoryPath"
                        node input.js organize "directory Path"
                        node input.js help
                     `);
}


// a function to get the types of file 
function getCatergory(name) {
    let ext = path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                // console.log(cTypeArray[i]);
                return type;
            }
        }

    }
    return "others";

}