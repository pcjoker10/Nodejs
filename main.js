var express = require('express')
// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

app.listen(3000, () => console.log("start! express server on port 3000"))

// app.get('/', (req, res) => res.send('/')) 

// app.get('/page', (req, res) => res.send('/page')) 

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html")
})

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/index.html")
})

// // node 디렉토리를 static으로 기억한다.
// // node 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
app.use(express.static('contents'))

// app.use(express.static('public'))
// app.use('/js', express.static('public/js')); 
// var path = require("path");
// app.use('/js', express.static(path.join(__dirname, 'public/js')));