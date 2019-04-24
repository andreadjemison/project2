//= =====================
// REQUIREMENTS
//= =====================
// require the herb model
const mongoose = require('../db/connection.js')
// const db = require('../db/herbs.js')
// const ObjectId = mongoose.Schema.Types.ObjectId

const herbSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    ailmentName: Array,
    // benefits: Array,
    price: Number,
    // inStock: Boolean,
})
let herbCollection = mongoose.model('Herb', herbSchema)

// show all herbs
const allHerbs = () => {
    return herbCollection.find()
}
// create new herb
const newHerb = (newherb) => {
    return herbCollection.create(newherb)
}
// show single herb
const oneHerb = (newherb) => {
    return herbCollection.findById(newherb)
}
// update single herb
const updateHerb = (herbid) => {
    return herbCollection.findByIdAndUpdate(herbid)
}
// delete single herb
const deleteHerb = (herbid) => {
    return herbCollection.findByIdAndRemove(herbid)
}


// export the controller with module.exports
module.exports = {
    allHerbs,
    newHerb,
    oneHerb,
    updateHerb,
    deleteHerb
}
