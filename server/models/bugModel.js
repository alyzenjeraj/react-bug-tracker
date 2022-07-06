const mongoose = require('mongoose');

const bugSchema = {
    title: String,
    description: String,
    uname: String,
    fix: String,
    severe: String,
    source: String,
    interface: String,
    location: String,
    version: String
}

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;