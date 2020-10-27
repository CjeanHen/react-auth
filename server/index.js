const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')

//App setup
// morgan is used to log messages in the terminal about server requests
app.use(morgan('combined'))
// will attempt to parse all requests into JSON
app.use(bodyParser.json({ type: '*/*' }))
router(app)

//Server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)
