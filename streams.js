const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf8' // encoding: 'utf8' ili utf-8 konvertuje u citljive reci iz dokumenta
})

// readStream.on('data', (chunk) => {
//   console.log('----- NEW CHUNK -----')
//   console.log(chunk)
// })

const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//   writeStream.write('\nNEW CHUNK\n')
//   writeStream.write(chunk)
// })

// piping - radi isto sto i ovo iznad (sa '.on' listener-om), samo bez 'NEW CHUNK'
readStream.pipe(writeStream)
