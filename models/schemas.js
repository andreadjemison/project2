// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const ailmentSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    herbId: ObjectId,
    oilId: ObjectId,
})
const herbSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    uses: Array,
    price: Number,
    inStock: Boolean,
})
const oilSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    uses: Array,
    price: Number,
    inStock: Boolean,
})
const supplementSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    uses: Array,
    price: Number,
    inStock: Boolean,
})
// export the donut model with module.exports
let ailmentCollection = mongoose.model('Ailment', ailmentSchema)
let herbCollection = mongoose.model('Herb', herbSchema)
let oilCollection = mongoose.model('Oil', oilSchema)
let supplementCollection = mongoose.model('Supplement', supplementSchema)



module.exports = {
    ailmentCollection,
    herbCollection,
    oilCollection,
    supplementCollection
}