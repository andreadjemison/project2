const mongoose = require('../db/connection.js')

const herbSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    ailmentName: Array,
    price: Number,
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
const updateHerb = (herbid, newid) => {
    return herbCollection.findByIdAndUpdate(herbid, newid)
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
