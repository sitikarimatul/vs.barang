const mongoose = require('mongoose')

const schema = mongoose.Schema

const barangSc = new schema({
    kodebarang: {
        type: String,
    },
    namabarang: {
        type: String
    },
    harga: {
        type: String
    },
    jenis: {
        type: String
    }
})

module.exports = mongoose.model('databarangg', barangSc)