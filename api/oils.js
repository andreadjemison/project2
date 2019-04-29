const mongoose = require('../db/connection.js')

const oilSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    ailmentName: Array,
    price: Number,
})
let oilCollection = mongoose.model('Oil', oilSchema)

// show all Oils
const allOils = () => {
    return oilCollection.find()
}
// create new oil
const newOil = (newoil) => {
    return oilCollection.create(newoil)
}
// show single oil
const oneOil = (newoil) => {
    return oilCollection.findById(newoil)
}
// update single oil
const updateOil = (oilid, newid) => {
    return oilCollection.findByIdAndUpdate(oilid, newid)
}
// delete single oil
const deleteOil = (oilid) => {
    return oilCollection.findByIdAndRemove(oilid)
}
const deleteAllOils = (oils) => {
    return oilCollection.deleteMany(oils)
}

// export the controller with module.exports
module.exports = {
    allOils,
    newOil,
    oneOil,
    updateOil,
    deleteOil,
    deleteAllOils
}
