//= =====================
// REQUIREMENTS
//= =====================

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index')

//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))
app.use(express.static('/images'))

// Logger provides extra information in our Node console about each request being made.
app.use(logger('dev'))

//= =====================
// Router
//= =====================
// Links the server to our Router File
app.use('/', routes) 



let PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('working')
})