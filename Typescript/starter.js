"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, Abul";
var mynum = 6.1;
var isClosed = true;
// number
var UserID = 334455.3;
// boolean
var isLoggedIn = true;
console.log(UserID, isLoggedIn);
// any
var hero = "Abul";
function getHero(heroName) {
    return heroName;
}
console.log(getHero("Abul Aiman Shaa"));
// function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 3));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("abul aiman shaa"));
function signIn(name, email, password, isSubscribed) {
    return "Signed in as" + " " + name + " and Subscribed is" + " " + isSubscribed;
}
console.log(signIn("Abul Aiman Shaa", "aimanshaay3k@gmail.com", "meowmeowponnakutty", true));
var findMax = function (x, y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
};
console.log(findMax(12, 13));
console.log(findMax(10, 5));
var marvelHeros = ["Thor", "IronMan", "SuperMan", "Hulk"];
marvelHeros = marvelHeros.map(function (heroNo1) {
    return "The Hero is ".concat(heroNo1);
});
console.log(marvelHeros);
var User = {
    name: "Abul Aiman Shaa",
    email: "aimanshaay3k@gmail.com",
    isActive: false
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Abul Aiman Shaa", isPaid: true });
