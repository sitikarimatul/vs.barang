const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 2000
const mongooseurl = 'mongodb://127.0.0.1/dbbarang'

mongoose.connect(mongooseurl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('connect mongodb'))
.catch((err) => console.log(err))

server.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

server.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))
server.use('/barang', require('./routers/barangrout'))

server.listen(port, () => {
    console.log(`Server Runing At ${port}`)
})