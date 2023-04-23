const loginSuccess = (req, res) => {
    if (req.user) {
        return res.status(200).json({
            message: 'User found!',
            success: true,
            user: req.user
        })
    }
}


const loginFailure = () => {
    return res.status(401).json({
        error: 'failure',
        success: false
    })
}

module.exports = {
    loginSuccess,
    loginFailure
}