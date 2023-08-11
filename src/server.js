const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')



// using  template engine
server.set('view engine', 'ejs')

// Change location masses views

server.set('views', path.join(__dirname,'views'))


// Enable static files
server.use(express.static('public'))

// to use req body

server.use(express.urlencoded({extended: true}))

// Routes
server.use(routes)

server.listen(3000, () => {
   console.log('Rodando...')
})