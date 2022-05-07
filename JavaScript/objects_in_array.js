// objects inside arrays
// very useful in real world applications

const users = [
    { name: 'Pratik', uid: '20BCS2820' },
    { name: 'Ankit', uid: '20BCS5383' },
];

// for (let user of users) {
//     console.log(user.name);
// }

// console.log(users);

// nested destructuring

// const [username, username2] = users;
// console.log(username.name, username2.uid); //gives --> Pratik   20BCS5383

let [{ name: user1_name, uid }, { uid: user2_uid }] = users; //giving an alias name to keys 
console.log(user1_name, " ", user2_uid); //gives --> Pratik   20BCS5383
console.log(user1_name, uid, " ", user2_uid); //gives --> Pratik 20BCS2820   20BCS5383