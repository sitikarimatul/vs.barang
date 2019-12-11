const databarang = require('express').Router()
const barangcont = require('../controller/barangcont')

databarang.post('/simpan', (req, res) => {
    barangcont.inputbarang(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

databarang.get('/tampildata', (req, res) => {
    barangcont.getdata()
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

module.exports = databarang