const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const botanistSchema = new Schema({
    id: {
        type: String,
        require: true
    },

    username: {
        type: String,
        trim: true,
        required: [true, 'please enter a name']
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'please enter a password']
    },
    plantname: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        unique: true,
        dropDups: true
    },
    link: {
        type: String,
        required: true
    }
})

const Botanist = mongoose.model("Botanist", botanistSchema);

module.exports = Botanist;