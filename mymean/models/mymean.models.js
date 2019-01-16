var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var MyMeanSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

MyMeanSchema.plugin(mongoosePaginate)
const MyMean = mongoose.model('Mymean', MyMeanSchema)

module.exports = MyMean;
