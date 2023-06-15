const { json } = require('express');
const fs = require('fs')

const data = {
    name: "Pratik",
    age: 23,
    city: "Bettiah"
}

const jsonData = JSON.stringify(data);
//lets write the data in a json file
fs.writeFile('data.json', jsonData, (err) => {
    console.log("Data written in a JSON file");
})

//lets read the data from a json file
fs.readFile('data.json', 'utf-8', (err, data) => {
    console.log(data);
    // parsing the data from json back to normal data
    const objData = JSON.parse(data);
    console.log(objData);
})