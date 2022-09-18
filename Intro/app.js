const names = require("./names");
const func = require("./utils");
const data = require("./alternative_flavour");
func.sayHi(names.secret);

const { secret } = names;
func.sayHi(secret);
console.log("--------------------------------------");

console.log(data);

require("./mind_grenade");

