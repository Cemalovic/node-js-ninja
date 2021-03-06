const http = require('http')
const fs = require('fs')
// lodash - donja crta
const _ = require('lodash')

// kreiranje servera
// req/request je ono sto je user poslao/trazio npr url, get/post metoda itd.
// res/response je ono sto mi zelimo da vratimo user-u
const server = http.createServer((req, res) => {
  // console.log('request made')
  // console.log(req)
  // console.log(req.url, req.method)

  // lodash random number (od 0 do 20)
  const num = _.random(0, 20)
  console.log(num)

  // lodash - okini funkciju samo jednom
  const greet = _.once(() => {
    console.log('hello')
  })

  greet()
  greet()

  // set header content type
  // res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Content-Type', 'text/html')

  // write/create the response
  // res.write('hello, ninjas')

  // sending response back to the browser
  // res.end()

  let path = './views/'

  switch (req.url) {
    case '/':
      path += 'index.html'
      // sending status code
      res.statusCode = 200
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break
    case '/about-us':
      res.statusCode = 301
      // redirect
      res.setHeader('Location', '/about')
      res.end()
      break

    default:
      path += '404.html'
      res.statusCode = 404
      break
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      // ako saljemo vise onda pisemo ovako
      // res.write(data)
      // res.end()

      // ako saljemo samo 1 odgovor, mozemo i ovako
      res.end(data)
    }
  })
})

// listening for requests
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
})
