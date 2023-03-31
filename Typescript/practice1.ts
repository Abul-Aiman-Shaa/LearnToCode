function give_error(error, errmsg): never {
    throw error(errmsg)
}

// give_error(EvalError, "This is an eval error")

let d: number = 4
let r: number = d / 2
const pi: number = 22/7

let Area = pi * r ^ 2  // 22/7 x 2 x 2

console.log(Area)
console.log(r)

export {}