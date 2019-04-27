//= =====================
// REQUIREMENTS
//= =====================

// lets us know we are using express
const express = require('express')

// this invokes the function of express
const app = express()

// for use in forms since those are only POST & GET
const methodOverride = require('method-override')
// logger
const logger = require('morgan')
// imported apis & schemas from each model
const herbApi = require('./api/herbs.js')
const oilApi = require('./api/oils.js')
const supApi = require('./api/sups.js')

//= =====================
// MIDDLEWARE
//= =====================
// body parser(req.body) for classic encoding if false
app.use(express.urlencoded({ extended: true }))

// body parser using JSON
app.use(express.json())

// for use in forms since those are only POST & GET
app.use(methodOverride('_method'))

// to link css
app.use('/public', express.static("public"))

// to link image folder
app.use('/imgs', express.static('imgs'))

// to run handlebars
app.set('view engine', 'hbs')

// Logger provides extra information in our Node console about each request being made.
app.use(logger('dev'))

// renders home page for entire website
app.get('/', (req, res) => {
    res.render('home')
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
    })
})

// create new herb
app.get('/herbs/new', (req, res) => {
        res.render('herbs/new')
    })

app.post('/herbs', (req, res) => {
    herbApi.newHerb(req.body)
    .then(() => {
        res.redirect('/herbs')
    })
})

// show single herb
app.get('/herbs/:id', (req, res) => {
    herbApi.oneHerb(req.params.id).then(herb => {
        res.render('herbs/show', { herb })
    })
})

//delete single herb
app.delete('/herbs/:id', (req, res) => {
    herbApi.deleteHerb(req.params.id).then(() => {
        res.redirect('/herbs')
    })
})

//update single herb
app.get('/herbs/:id/edit', (req, res) => {
    herbApi.oneHerb(req.params.id)
        .then(herb => {
            res.render('herbs/edit', { herb })
        })
})

app.put('/herbs/:id', (req, res) => {
    herbApi.updateHerb(req.params.id, req.body)
        .then(() => {
            res.redirect(`/herbs/${req.params.id}`)
        })
})

//= =====================================================
// OILS
//= =====================================================

// list/ index of all oils
app.get('/oils', (req, res) => {
    oilApi.allOils().then(oils => {
        console.log(oilApi.allOils())
        res.render('oils/index', { oils })
    })
})

// create new oil
app.post('/oils', (req, res) => {
    oilApi.newOil(req.body).then(() => {
        console.log(req.body)
        res.render('oils/new')
    })
})

// show single oil
app.get('/oils/:id', (req, res) => {
    oilApi.oneOil(req.params.id).then(oil => {
        res.render('oils/show', { oil })
    })
})

//delete single oil
app.delete('/oils/:id', (req, res) => {
    oilApi.deleteOil(req.params.id).then(() => {
        res.render('oils/index')
    })
})


//update single oil
app.get('/oils/:id/edit', (req, res) => {
    oilApi.oneOil(req.params.id)
        .then(oil => {
            res.render('oils/edit', { oil })
        })
})

app.put('/oils/:id', (req, res) => {
    oilApi.updateOil(req.params.id, req.body)
        .then(() => {
            res.render('oils/index',  {schema:req.body})
        })
})

//= =====================================================
// SUPPLEMENTS
//= =====================================================

// list/ index of all supplements
app.get('/sups', (req, res) => {
    supApi.allSups().then(sups => {
        console.log(supApi.allSups())
        res.render('sups/index', { sups })
    })
})

// create new supplement
app.post('/sups', (req, res) => {
    supApi.newSup(req.body).then(() => {
        console.log(req.body)
        res.render('sups/new')
    })
})

// show single supplement
app.get('/sups/:id', (req, res) => {
    supApi.oneSup(req.params.id).then(sup => {
        res.render('sups/show', { sup })
    })
})

//delete single supplement
app.delete('/sups/:id', (req, res) => {
    supApi.deleteSup(req.params.id).then(() => {
        res.render('sups/index')
    })
})

//update single supplement
app.get('/sups/:id/edit', (req, res) => {
    supApi.oneSup(req.params.id)
    .then(sup => {
        res.render('sups/edit', { sup })
    })
})

app.put('/sups/:id', (req, res) => {
    supApi.updateSup(req.params.id, req.body)
        .then(() => {
            res.render('sups/index',  {schema:req.body})
        })
})

let PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('working')
})