function addTwo(num: number){
    return num+2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signupUser(name: string, email: string, isPaid: boolean){

}


var login = function(name:string, email:string, isPaid: boolean=false){

}

const consolErr = (strn: string): void => {
    console.log("Hello")
}

const returnTwo = (val: number): number => {
    return val
}

const throwErr = (err)=> {
    throw new Error(err)
}


const testObj = (): {} => {
    return {}
}

type User = {
    name: string,
    email:string,
    age: number
}


const createUser = (user: User) => {

}
createUser({name:"Trishul", email:"Tris", age:25})

signupUser("Trishul", "trishul@gmail.com", true)
login("trishul", "trishul@gmail.com")


type Crew = {
    readonly _id: string,
    name: string, 
    email: string,
    isactive: boolean
}

let crew_vic: Crew = {
    _id: "123",
    name:"Trishul",
    email:"Trishul@gmail.com",
    isactive:true
}

crew_vic.name = "Yrishul BS"