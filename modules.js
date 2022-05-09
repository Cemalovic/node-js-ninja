// const xyz = require('./people')

// xyz vraca prazni objekat ili vrednost - module.exports - u people fajlu

// console.log(xyz)
// console.log(xyz.people, xyz.ages)

// import './people' uz object destructuring
const { people, ages } = require('./people')
// console.log(people, ages)

// 'os' je built-in u NodeJS - vraca objekat o operativnom sistemu na kome trenutno radimo
const os = require('os')
// console.log(os)

console.log(os.platform(), os.homedir())
