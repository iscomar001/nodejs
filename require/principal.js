const {literal,data,counter} = require('./functions').default;
const User = require('./user');

const arrayItems = ["Item1","Item2","Item3"];

console.log(literal)
console.log(data)
counter(arrayItems);

const jim = new User('Jim', 37, 'jim@example.com');

console.log(jim.getUserStats());