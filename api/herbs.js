//= =====================
// REQUIREMENTS
//= =====================
// require the herb model
const herb = require('../models/schemas.js')

const herbController = {
    //= =====================
    // INDEX
    //= =====================
    // Create a function sends all herbs to herbs/index.hbs view
    index: (req, res) => {
        // herb.find()
            // .then(herbs => {
                res.render('herbs/index')
            // }
            // )
    },
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the new.hbs form
    new: (req, res) => {
        res.render('/herbs/new')
    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single herb's show page
    show: (req, res) => {
        // herb.findById(req.params.id)
            // .then(herb => {
                res.render('herbs/show',
                //  { herb }
                 )
            // })
    },
    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new herb
    // and upon success redirects back to the index page "/"
    create: (req, res) => {
        // herb.create(req.body)
        //     .then(() =>
                res.redirect('/')
                // )
    },
    //= =====================
    // EDIT
    //= =====================
    // Create a function that renders the edit.hbs page and
    // sends that a herb's data to it
    edit: (req, res) => {

        // herb.findById(req.params.id)
        //     .then(herb => {
                res.render('herbs/edit', 
                // { herb }
                )
            // })
    },
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the herb and
    // redirects back to the SHOW PAGE (not index)
    update: (req, res) => {

        // herb.findByIdAndUpdate(req.params.id, req.body, { new: true })
        //     .then(() => {
                res.redirect("/" + req.params.id)

            // })
    },
    //= =====================
    // DELETE
    //= =====================
    // Create a function that deletes the herb and
    // redirects back to index page "/"
    delete: (req, res) => {

        // herb.findByIdAndRemove(req.params.id)
            // .then(() => {
                res.redirect("/")
            // })
    }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = herbController
