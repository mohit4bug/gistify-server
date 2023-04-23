const passport = require('passport')
const { loginSuccess, loginFailure } = require('../controllers/auth')

const router = require('express').Router()


router.get('/login/success', loginSuccess)

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback', passport.authenticate('google',
    {
        failureRedirect: '/login/failure',
        successRedirect: process.env.CLIENT_URL
    }
))

router.get('/logout', (req, res) => {
    try {
        req.logOut()
        return res.json("Logout Success!")
    } catch (error) {
        return res.json(error.message)
    }
})

router.get('/login/failure', loginFailure)


module.exports = router