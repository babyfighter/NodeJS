var a = ["a", 9, "b", 8];
console.log(a[0])
console.log(a[1])
a.shift();
a.unshift("happy");
console.log(a)

var myGlobal = 10;
function fun1(){
    oopGlobal = 5;
}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: "+ myGlobal;
    }
    if (typeof oopGlobal != "undefined") {
        output += "oopGlobal: "+ oopGlobal;
    }
    console.log(output)
}
fun1()
fun2()

function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift();
}

var arr = [1,2,3,4,5];
console.log("before: " + JSON.stringify(arr))
console.log(nextInLine(arr,6))
console.log("after: " + JSON.stringify(arr))

var collectionCopy = JSON.parse(JSON.stringify(collection));// Keep a copy of the collection(objects)
var myArray = [];
var i =0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray)

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j< arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

var randomNumberBetween0and19 = Math.floor(Math.random() * 20)
function randomFraction() {
    return Math.random();
}
console.log(randomNumberBetween0and19);

function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumberRange(1,9))

function convertToInteger(str) {
    return parseInt(str);
}
function convertToRadix(str) {
    return parseInt(str, 2);
}
console.log(convertToInteger("56"))
console.log(convertToRadix("111"))

function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(1,1));

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "0"
}
console.log(checkSign(-1))

let str = "free";
const SENTENCE = str + " is cool!";
for (let i = 1; i < str.length; i++) {
    console.log(SENTENCE);
}
const s = [5,7,3]
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

const MATH_CONSTANTS = {PI: 3.14}
Object.freeze(MATH_CONSTANTS)

var magic = () => {
    return new Date();
}
var magic = function (){
    return new Date();
}
const magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);

const increment = (function () {
    return function increment(number, value = 0) {
        return number + value;
    };
})();
console.log(increment(5,2))
console.log(increment(5))

const sum = (function () {
    return function sum(...args) {//rest operator
        return args.reduce((a,b) => a+b, 0)
    }
})();
console.log(sum(1,2,3))

const arr1 = ['a','b','c','d']
let arr2;
(function () {
    arr2 = [...arr1];//spread operator
    arr1[0]= 'potato'
})();
console.log(arr2)

const num = (function (){
    arr = [1,2,3];
    console.log(arr);
})();
console.log(num)

var voxel = {x : 3, y : 6.5, z : 2.3}
const {x : a, y : b, z : c} = voxel//assigning value
function getTemp(avg) {
    const {x : z} = avg
    return z;
}
console.log(getTemp(voxel))

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 74, max: 88}
};
function getMax(forecast) {
    const {tomorrow: {max: maxTmr}} = forecast;//deconstructing nested struct
    return maxTmr;
}
console.log(getMax(LOCAL_FORECAST))

const[z,x, , y] = [1,2,3,4,5,6]
console.log(z,x,y)
let a = 8, b = 6;
(() => {
    [a, b] = [b, a]
})();
console.log(a)
console.log(b)

const source = [1,2,3,4,5,6]
function removeFirstTwo(list) {
    const [ , ,...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source)
console.log(arr)
console.log(source)

const stats = {
    max: 56, min: -2
}
const half = (function (){
    return function half({max, min}){//deconstruct object to assign as arg
        return (max + min) / 2.0
    }
})();
console.log(stats)
console.log(half(stats))

const person = {
    name: "adam", age: 20
};
//template literal
const greeting = `hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting)

const createPerson = (name, age, gender) =>({name, age, gender})
console.log(createPerson("zodiac", 56, "male"))

var SpaceShuttle = function (target) {
    this.target = target;
}
var zeus = new SpaceShuttle('Jupiter');
class SpaceShuttle{
    constructor(target) {
        this.target = target;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.target)

function makeClass(){
    class Vege{
        constructor(name) {
            this.name = name
        }
    }
    return Vege;
}
const Vege = makeClass();
const carrot = new Vege("carrot")
console.log(carrot.name)

class Book {
    constructor(author) {
        this._author = author
    }
    get writer(){
        return this._author
    }
    set writer(updatedAuthor) {
        this._author = updatedAuthor
    }
}
const name = new Book("adam")
let newName = name.writer;
name.writer = "Beck"
console.log(name)
console.log(newName)

export const capitalise = str => str.toUpperCase();
import {capitalise} from "./YT"
const cap = capitalise("hello")
console.log(cap)

import * as XXX from "./filename"
// create export fallback - only export one thing
// export default function subtract(x,y) {return x - y}
// import default export
// import subtract from "math"
