//= =====================
// REQUIREMENTS
//= =====================

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
// const routes = require('./routes/index')
const herbApi = require('./api/herbs.js')

//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use( '/public', express.static("public"))
app.use('/imgs',express.static('imgs'))


app.set('view engine', 'hbs')


// Logger provides extra information in our Node console about each request being made.
app.use(logger('dev'))



app.get('/', (req, res) => {
    // herbApi.allHerbs().then(herbs => {
            res.render('herbs')
        })
    // })
//= =====================================================
// HERBS
//= =====================================================

// list/ index of all herbs
app.get('/herbs', (req, res) => {
    herbApi.allHerbs().then(herbs => {
        console.log(herbApi.allHerbs())
            res.render('herbs/index', { herbs })
        })})

// create new herb
app.post('/herbs', (req, res) => {
    herbApi.newHerb(req.body).then(() => {
            console.log(req.body)
            res.render('herbs/new')
        })})

// show single herb
app.get('/herbs/:id', (req, res) => {
    herbApi.oneHerb(req.params.id).then(herb => {
            res.render('herbs/show', { herb })
        })})

//delete single herb
app.delete('/herbs/:id', (req, res) => {
    herbApi.deleteHerb(req.params.id).then(() => {
            res.render('herbs/index')
        })})

//update single herb
app.put('/herbs/:id', (req, res) => {
    herbApi.updateHerb(req.params.id).then(() => {
            res.render('herbs/edit')
        })})



let PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('working')
})