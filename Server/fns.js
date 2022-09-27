function add(n1,n2) {
    return n1 + n2;
}
//Assign an anonymous function to a variable
const adder = function(n1,n2) {
    return n1 + n2;
}
// Arrow function
const addy = (n1,n2) =>  {
    return n1 + n2;
}
// Arrow function one-liner
const addos = (n1,n2) => n1 + n2; 

const sayHi = () => console.log('Hello');
let people = [];
$('button').on('click', () => { people.push('Chris')})
console.log(people);

