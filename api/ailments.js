const mongoose = require('../db/connection.js')
const herb = require('./herbs.js')
const oil = require('./oils.js')
const sup = require('./sups.js')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const ailmentSchema = new mongoose.Schema({
    ailmentName: String,
    description: String,
    img: String,
    herbId: [{type: ObjectId, ref: 'Herb'}],
    oilId: [{type: ObjectId, ref: 'Oil'}],
    supId: [{type: ObjectId, ref: 'Supplements'}]
})
let ailmentCollection = mongoose.model('Ailment', ailmentSchema)
// let herbCollection = mongoose.model('Herb', herbSchema)
// let oilCollection = mongoose.model('Oil', oilSchema)
// let supplementCollection = mongoose.model('Supplement', supplementSchema)

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