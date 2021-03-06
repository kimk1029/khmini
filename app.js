// 사용 모듈 로드
var express = require('express'); // 웹서버 사용 .
var app = express();
var fs = require('fs'); // 파일 로드 사용.


// 포트 설정
app.listen(3000, function () {
    console.log('Server Start .');
});
app.use(express.static(__dirname + '/public' ));
app.use('/js', express.static(__dirname + '/../node_modules/jquery/dist')); // redirect JS jQuery

// 라우팅 설정
app.get('/', function (req, res) { // 웹서버 기본주소로 접속 할 경우 실행 . ( 현재 설정은 localhost 에 3303 port 사용 : 127.0.0.1:3303 )
    fs.readFile('index.html', function (error, data) { // index.html 파일 로드 .
        if (error) {
            console.log(error);
        } else {
        
            res.end(data); // 로드 html response .
        }
    });
});

app.get('/board', function (req, res) { // 웹서버 기본주소로 접속 할 경우 실행 . ( 현재 설정은 localhost 에 3303 port 사용 : 127.0.0.1:3303 )
    console.log("board in ************");
    fs.readFile('test_board.html', function (error, data) { // test_board.html 파일 로드 .
        if (error) {
            console.log(error);
        } else {
        
            res.end(data); // 로드 html response .
        }
    });
});

