var express = require('express')
var app = express()

app.listen(3000, () => console.log("start! express server on port 3000"))
app.use(express.static('contents'))

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/sample', function(req,res) {
    res.sendFile(__dirname + "/sample.html")
})