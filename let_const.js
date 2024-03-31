// Let creates variables
let school = 'Minneapolis College'
school = 'Saint Paul College'
school = 'Metro State'
school = 'Minneapolis College'


// const is like variable but cannot change
// const language = 'Javascript'

// why would we make a constant variable instead of a let variable
// biggest reason is so that I do not accidentally change a variable i do not want to
//const can be used with arrays as well
// const arrays can add more things to them, but only adding more to the array and not changing the value of an already declared piece of information


// javascript shortcuts
// Objects have properties (Number Street City) and those properties have values (1501 Hennepin Ave Minneapolis)
//let address = {
    //number: '1501',
    //street: 'Hennepin Ave',
    //city: 'Minneapolis',


const number = '1501'
const street = 'Hennepin Ave'
const city = 'Minneapolis'

// const address = { // can simplify more by using just the variable name
//     number: number,
//     street: street,
//     city: city,
// }
// console.log(address)


// function printMessage(message) {
//     console.log('Your message is:' + message)
// }
// printMessage('hello')
// printMessage('Hi Programmers')
//
// const printMessage = function(message){
//     console.log('Your message is' + message)
// }
const printMessage = (message) => {
    console.log('Your message is' + message)
}
printMessage('Hello Programmers')


// function printWelcome() {
// console.log('Welcome')
// }

const printWelcome = () => {
    console.log('Welcome')
}



















