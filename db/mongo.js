const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Gistify'
}).then(() => {
    console.log('Gistify db connected!')
}).catch(e => console.error(e.message))