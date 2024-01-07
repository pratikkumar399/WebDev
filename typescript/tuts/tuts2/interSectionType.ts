type students = {
    name : string,
    age : number,
    class : number,
}

type school = {
    schoolName : string,
    location : string,
}

type studentData = students & school;


const studentData  : studentData = {
    name : "John",
    age : 30,
    class : 10,
    schoolName : "ABC",
    location : "XYZ",
}

function printStudentData(student : studentData){
    console.log(`${student.name} is ${student.age} years old and he studies in class ${student.class} in ${student.schoolName} school, which is located in ${student.location}`);
}

printStudentData(studentData);
console.log(studentData);