const { createGist, fetchGists } = require('../controllers/gist')
const verify = require('../middlewares/verify')

const router = require('express').Router()

router.post('/create', verify, createGist)

router.get('/fetch-all', verify, fetchGists)


module.exports = router