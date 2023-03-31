function greet(user) {
    console.log("Hello,", user, "!");
}

greet("Abul")


const Arrowfunction = (action) => {
    return "I am a arrow function !" + " I can do " + action;
}

console.log(Arrowfunction("literally anything"));

(function (task) {
    console.log("I'll do what you say immeadiatly.", "You can't reuse me !", task)
})("Man of the match");