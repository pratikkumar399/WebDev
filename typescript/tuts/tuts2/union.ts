type unknownUser = {
    rollNo : number | string,
    name : string,
    class : string
}

type knownUser = {
    class : number,
    gender : string,
    name : string,
}

let user : unknownUser | knownUser = {
    class : "10",
    rollNo : 1,
    name : "John",
}

function knowUser(user : unknownUser | knownUser){
    if(user as knownUser){
        console.log(`${user.class}`);
    }else{
        console.log(`${user.name} is an unknown user`);
    }
}

knowUser(user);