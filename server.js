const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const cookieSession = require('cookie-session')
const passport = require('passport')
dotenv.config()
require('./db/mongo') // db connection
require('./lib/passport')

// middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    credentials: true
}))

app.use(express.json())
app.use(cookieSession({
    name: 'Gistify',
    keys: [process.env.COOKIE_KEY],
    maxAge: 86400000
}))
app.use(passport.initialize())
app.use(passport.session())


// testing
app.get('/', (req, res) => {
    return res.send("Gistify")
})


// routes
app.use('/auth', require('./routes/auth'))
app.use('/gist', require('./routes/gist'))


app.listen(process.env.PORT || 8000, () => {
    console.log('Gistify server running!')
})