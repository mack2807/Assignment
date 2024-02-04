const express= require('express');
const dotenv = require('dotenv')
const app = express()
app.use(express.json())
dotenv.config({ path: './config.env' })
const dataRouter = require('./routes/dataRoutes');
require('./controllers/db')

app.use('/api', dataRouter)
const port = process.env.PORT || 3009
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
  })

module.exports = app