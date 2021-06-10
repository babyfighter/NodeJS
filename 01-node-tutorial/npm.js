// local dependency
// npm i <packageName>

// global dependency
// npm install -g<packageName>

//manual approach (package.json)
//npm init
//npm init -y (everything default)
const _ = require("lodash")
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log("hello")
console.log("hello")
