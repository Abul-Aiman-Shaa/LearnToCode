let greetings: string = "Hello, Abul"
let mynum: number = 6.1
const isClosed: boolean = true


// number
let UserID: number = 334455.3

// boolean
let isLoggedIn: boolean = true


console.log(UserID, isLoggedIn)


// any

let hero: any = "Abul"

function getHero(heroName: string) {
    return heroName
}


console.log(getHero("Abul Aiman Shaa"))


// function
function addNum(x: number, y: number) {
    return x + y
}


console.log(addNum(2, 3))


function getUpper(val: string) {
    return val.toUpperCase()
}

console.log(getUpper("abul aiman shaa"))


function signIn(name: string, email: string, password: string, isSubscribed: boolean) {
    return "Signed in as" + " " + name + " and Subscribed is" + " " + isSubscribed
}

console.log(signIn("Abul Aiman Shaa", "aimanshaay3k@gmail.com", "meowmeowponnakutty", true))


const findMax = (x: number, y: number) => {
    if (x > y) {
        return x
    }

    else {
        return y
    }
}


console.log(findMax(12, 13))
console.log(findMax(10, 5))

let marvelHeros = ["Thor", "IronMan", "SuperMan", "Hulk"]

marvelHeros = marvelHeros.map(heroNo1 => {
    return `The Hero is ${heroNo1}`
})


console.log(marvelHeros)


const User = {
    name: "Abul Aiman Shaa",
    email: "aimanshaay3k@gmail.com",
    isActive: false
}


function createUser({name: string, isPaid: boolean }) {
    
}


createUser({name: "Abul Aiman Shaa", isPaid: true})




export {}