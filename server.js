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
const ailApi = require('./api/ailments.js')

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

// list index of all herbs
app.get('/herbs', (req, res) => {
    herbApi.allHerbs()
    .then(herbs => {
        console.log(herbApi.allHerbs(req.body))
        res.render('herbs/index', { herbs })
    })
})

// this gets the new herb form page to render
app.get('/herbs/new', (req, res) => {
        res.render('herbs/new')
    })
// gets the new herb form inputs and adds it to herb index
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
app.get('/oils/new', (req, res) => {
    res.render('oils/new')
})

app.post('/oils', (req, res) => {
    oilApi.newOil(req.body)
    .then(() => {
        res.redirect('/oils')
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
        res.redirect('/oils')
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
            res.redirect(`/oils/${req.params.id}`)
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
app.get('/sups/new', (req, res) => {
    res.render('sups/new')
})
app.post('/sups', (req, res) => {
    supApi.newSup(req.body)
    .then(() => {
        res.redirect('/sups')
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
        res.redirect('/sups')
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
            res.redirect(`/sups/${req.params.id}`)
        })
})

//= =====================================================
// AILMENTS
//= =====================================================

// list/ index of all ailments
app.get('/ailments', (req, res) => {
    ailApi.allAilments().then(ailments => {
        // console.log(ailApi.allAilments())
        res.render('ailments/index', { ailments })
    })
})

// create new ailment
app.get('/ailments/new', (req, res) => {
    res.render('ailments/new')
})

app.post('/ailments', (req, res) => {
    ailApi.newAilment(req.body).then(() => {
        res.redirect('/ailments')
    })
})

// show single ailment
app.get('/ailments/:id', (req, res) => {
    ailApi.oneAilment(req.params.id).then(ailment => {
        res.render('ailments/show', { ailment })
    })
})

//delete single ailment
app.delete('/ailments/:id', (req, res) => {
    ailApi.deleteAilment(req.params.id).then(() => {
        res.redirect('/ailments')
    })
})

//update single ailment
app.get('/ailments/:id/edit', (req, res) => {
    ailApi.oneAilment(req.params.id)
    .then(ailment => {
        res.render('ailments/edit', { ailment })
    })
})

app.put('/ailments/:id', (req, res) => {
    ailApi.updateAilment(req.params.id, req.body)
        .then(() => {
            res.redirect(`/ailments/${req.params.id}`)
        })
})

let PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('working')
})

//   console.log(herbApi.allHerbs())
//   for(let i=0; i<oil.ailmentName.length; i++){
//     if (ailment.ailmentName === oil.ailmentName){
//       return oilCollection.find()
//     }
//   }
//   for(let i=0; i<sup.ailmentName.length; i++){
//     if (ailment.ailmentName === sup.ailmentName){
//       return supplementCollection.find()
//     }
//   }
// console.log(herbApi.allHerbs(ailApi.oneAilment(`${id}`)))
// console.log(herbApi.allHerbs().length)
// console.log(herbApi.allHerbs())
// console.log(herbApi.allHerbs(req.body))