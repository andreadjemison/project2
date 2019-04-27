const mongoose = require('../db/connection.js')

const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const ailmentSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    herbId: ObjectId,
    oilId: ObjectId,
    supId: ObjectId
})
let ailmentCollection = mongoose.model('Ailment', ailmentSchema)

// show all Ailments
const allAilments = () => {
    return ailmentCollection.find()
}
// create new ailment
const newAilment = (newailment) => {
    return ailmentCollection.create(newailment)
}
// show single ailment
const oneAilment = (newailment) => {
    return ailmentCollection.findById(newailment)
}
// update single ailment
const updateAilment = (ailmentid, newid) => {
    return ailmentCollection.findByIdAndUpdate(ailmentid, newid)
}
// delete single ailment
const deleteAilment = (ailmentid) => {
    return ailmentCollection.findByIdAndRemove(ailmentid)
}

module.exports = {
    allAilments,
    newAilment,
    oneAilment,
    updateAilment,
    deleteAilment
}