const Gist = require('../models/Gist')
const User = require('../models/User')

const createGist = async (req, res) => {
    try {
        const user = req.user._id
        const { filename, lang, code } = req.body
        if (!filename || !lang || !code) {
            return res.status(404).json({
                message: 'Please fill required fields!',
                success: false
            })
        }
        const newGist = await Gist.create(req.body)
        await newGist.save()

        const gistUser = await User.findById(user)
        gistUser.gists.push(newGist._id)
        await gistUser.save()

        return res.status(201).json({
            message: 'Gist created successfully!',
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }
}
const fetchGists = async (req, res) => {
    try {
        const user = await User.findById(req.user?._id).populate('gists')

        return res.status(200).json({
            message: 'Gists fetched successfully!',
            gists: user?.gists,
            success: true,
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
            success: false
        })
    }
}



module.exports = {
    createGist,
    fetchGists
}