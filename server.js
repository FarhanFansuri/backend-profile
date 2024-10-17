// environtment config
require('dotenv').config()

const express = require('express')
const port = process.env.PORT || 3000
const router = require('./routes/contactRoutes')
const app = express()

app.use(express.json())

app.use(router)

app.listen(port,()=>{
    console.log(`server running on port ${port}!!`)
})
