"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function give_error(error, errmsg) {
    throw error(errmsg);
}
// give_error(EvalError, "This is an eval error")
var d = 4;
var r = d / 2;
var pi = 22 / 7;
var Area = pi * r ^ 2; // 22/7 x 2 x 2
console.log(Area);
console.log(r);
