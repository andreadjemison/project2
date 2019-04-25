//= =====================
// REQUIREMENTS
//= =====================
// require the oil model
const mongoose = require('../db/connection.js')
// const db = require('../db/Oils.js')
// const ObjectId = mongoose.Schema.Types.ObjectId

const supplementSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    ailmentName: Array,
    price: Number,
})
let supplementCollection = mongoose.model('Supplement', supplementSchema)

// show all Oils
const allSups = () => {
    return supplementCollection.find()
}
// create new oil
const newSup = (newsup) => {
    return supplementCollection.create(newsup)
}
// show single oil
const oneSup = (newsup) => {
    return supplementCollection.findById(newsup)
}
// update single oil
const updateSup = (supid) => {
    return supplementCollection.findByIdAndUpdate(supid)
}
// delete single oil
const deleteSup = (supid) => {
    return supplementCollection.findByIdAndRemove(supid)
}


// export the controller with module.exports
module.exports = {
    allSups,
    newSup,
    oneSup,
    updateSup,
    deleteSup
}
