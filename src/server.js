const express = require('express')
const server = express()
const routes = require('./routes')



// using  template engine
server.set('view engine', 'ejs')


// Enable static files
server.use(express.static('public'))

// Routes
server.use(routes)

server.listen(3000, () => {
   console.log('Rodando...')
})