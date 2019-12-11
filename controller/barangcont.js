const barangmod = require('../model/barang')
const mongoose = require('mongoose')

exports.inputbarang = (data) =>
new Promise((resolve, reject) => {
    barangmod.create(data)
    .then((res) => {
        resolve ({error: false, pesan:'Data Tersimpan'})
    }).catch(res => {
        reject({error: true, pesan: ' Gagal Tersimpan'})
    })
})

exports.getdata = () =>
new Promise((resolve, reject) => {
    barangmod.find()
    .then(res => {
        resolve ({error: false, pesan: ' Data Berhasil di ambil', data: res})
    })
    .catch(res => {
        console.log(error)
        reject ({error:true, pesan: ' Data tisak Diambil'})
    })
})
