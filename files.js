// 'fs' je built-in u NodeJS - File System
const fs = require('fs')

// 'fs' je async i izvrsava se nakon kratkog vremena, ali ne blokira dalje izvrsavanje koda

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err)
  }

  console.log(data.toString())
})

// izvrsice se prvo ovo, pa onda ono iznad
console.log('last line')

// creating files
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
  console.log('file was written')
})
fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('file was written')
})

// directories/folders
// ako NE postoji
if (!fs.existsSync('./assets')) {
  // .mkdir - make/create directory/folder
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder created')
  })
} else {
  // .rmdir - remove/delete directory/folder
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted')
  })
}

// deleting files
// ako postoji fajl
if (fs.existsSync('./docs/deleteme.txt')) {
  // .unlink - delete file
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  })
} else {
  // .writeFile - create file
  fs.writeFile('./docs/deleteme.txt', "hello, I'm deleteme file", () => {
    console.log('file was written')
  })
}
