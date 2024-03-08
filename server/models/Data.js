const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    uniid: String,
    data: String,
});

const DataModel = mongoose.model("information", DataSchema);

module.exports = DataModel;
