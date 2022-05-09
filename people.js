const people = ['yoshi', 'ryu', 'chun-li', 'mario']
const ages = [20, 25, 30, 35]

// console.log(people)

// exportovanje jedne stvari
// module.exports = people

// exportovanje vise stvari
module.exports = {
  people, // skraceno od - people: people
  ages // skraceno od - ages: ages
}
