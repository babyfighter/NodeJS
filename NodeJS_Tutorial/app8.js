//npm i lodash
// "lodash": "^4.17.21"//major.minor.patch
// "^4.17.21" 4.x.x
// "~4.17.21" 4.17.x
// "4.17.21" exactly version 4.17.21

const _ = require('lodash');
let example = _.fill([1,2,3,4,5],"banana",1,4)
console.log(example);