const express = require('express')

const blogController = require('../controllers/blogController')

const router = express.Router()

// getting all data/blogs from mongoDB, rednering them in 'index.ejs, putting them in to 'blogs' variable, setting up the 'title' and sorting DESC
router.get('/', blogController.blog_index)

// sending all data/blogs to mongoDB via 'req.body' and '.save' and after that, redirecting to './blogs' page/route
router.post('/', blogController.blog_create_post)

router.get('/create', blogController.blog_create_get)

// getting ONE data/blog object from mongoDB by its parameter, rednering it in 'details.ejs, putting it in to 'blog' variable and setting up the 'title'
router.get('/:id', blogController.blog_details)

router.delete('/:id', blogController.blog_delete)

module.exports = router
