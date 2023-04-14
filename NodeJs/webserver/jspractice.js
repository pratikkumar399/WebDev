const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ key: key, value: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
console.log(
    [1, , , 3].map((x, index) => {
        console.log(`Visit ${index}`);
        return x * 2;
    }),
);
// Visit 0
// Visit 2
// [2, empty, 6]

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
}, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',
}, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];

const chemists = people.filter(person => { (person.profession === "chemist") });

const listItems = chemists.map(person => { person.profession });
console.log(listItems);
