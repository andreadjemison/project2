const express = require('express')
const router = express.Router()
const herbApi = require('../api/herbs.js')
// Example Route
// router.get('/', someController.index)

//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that triggers the donut controller index function

router.get('/', herbApi.index)


//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that triggers the donut controller new function

router.get('/new', herbApi.new)

//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that triggers the donut controller show function

router.get('/:id', herbApi.show)


//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that triggers the donut controller create function

router.post('/', herbApi.create)

//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that triggers the donut controller edit function

router.get('/:id/edit', herbApi.edit)

//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that triggers the donut controller update function

// Create a PATCH update route "/:id" that triggers the donut controller update function


router.put('/:id', herbApi.update)


//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that triggers the donut controller delete function

router.delete('/:id', herbApi.delete)

module.exports = router
