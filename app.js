const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express()

// mongoDB connect
const dbURI =
  'mongodb+srv://sexykoder:test1982@nodetutorial.p0kgv.mongodb.net/node-tutorial?retryWrites=true&w=majority'

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

// register view engine (with 'ejs')
app.set('view engine', 'ejs')

// listening for requests
// app.listen(3000)

// middleware & static files (css, images, ..)
app.use(express.static('public'))

// middleware that get access to 'req.body' with POST (app.post) method
app.use(express.urlencoded({ extended: true }))

// logs 'method' and 'port'/'path'
app.use(morgan('dev'))

// mongoose and mong sandbox routes
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   })

//   blog
//     .save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.get('/single-blog', (req, res) => {
//   Blog.findById('627cd0e2174622a0e6c7351c')
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.use((req, res, next) => {
//   console.log('new request has made:')
//   console.log('host: ', req.hostname)
//   console.log('path: ', req.path)
//   console.log('method: ', req.method)
//   next()
// })

// next() ce raditi samo ukoliko middleware nije poslao 'response'
// ovde ce okinuti i prikazati console.log()
// app.use((req, res, next) => {
//   console.log('in the next middleware')
//   next()
// })

// routes
app.get('/', (req, res) => {
  // prikazuje .html 'kod'
  // res.send('<p>Home page</p>')

  // prikazuje .html stranicu
  // res.sendFile('./views/index.html', { root: __dirname })

  // prikazuje .ejs stranicu
  // res.render('index')

  // prikazuje .ejs stranicu i 1 objekat/vrednost koju zelimo tamo da prikazemo/pozovemo
  // res.render('index', { title: 'Home' })

  // const blogs = [
  //   {
  //     title: 'Yoshi finds eggs',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur'
  //   },
  //   {
  //     title: 'Mario finds stars',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur'
  //   },
  //   {
  //     title: 'How to defeat bowser',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur'
  //   }
  // ]

  // prikazuje .ejs stranicu i vise objekata/vrednosti koju zelimo tamo da prikazemo/pozovemo
  // res.render('index', { title: 'Home', blogs: blogs} )
  // skraceno od - blogs: blogs

  // res.render('index', { title: 'Home', blogs })

  res.redirect('/blogs')
})

// next() ce raditi samo ukoliko middleware nije poslao 'response'
// ovde NECE okinuti i prikazati console.log(), zato sto je iznad poslao 'response'
// app.use((req, res, next) => {
//   console.log('in the next middleware')
//   next()
// })

app.get('/about', (req, res) => {
  // prikazuje .html 'kod'
  // res.send('<p>About page</p>')

  // prikazuje .html stranicu
  // res.sendFile('./views/about.html', { root: __dirname })

  // prikazuje .ejs stranicu
  // res.render('about')

  // prikazuje .ejs stranicu i 1 objekat/vrednost koju zelimo tamo da prikazemo/pozovemo
  res.render('about', { title: 'About' })
})

// blog routes
app.use('/blogs', blogRoutes)

// redirect
// app.get('/about-us', (req, res) => {
//   res.redirect('/about')
// })

// 404 - mora biti na dnu strane
app.use((req, res) => {
  // prikazuje .html stranicu i status 404
  // res.status(404).sendFile('./views/404.html', { root: __dirname })

  // prikazuje .ejs stranicu i status 404
  // res.status(404).render('404')

  // prikazuje .ejs stranicu i objekat/vrednost koju zelimo tamo da prikazemo/pozovemo
  res.status(404).render('404', { title: '404' })
})
