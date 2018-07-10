const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('user login');

    socket.on('sendmsg', function (data) {
        io.emit('serverPush',data);
    });

    socket.on('clientScorllToY', function (data) {
        console.log(data);
        io.emit('serverScorllToY',data);
    });
})



// const userRouter = require('./user');

app.use(cookieParser());
app.use(bodyParser.json());



// app.use('/user', userRouter);

app.get('/', function (req, res) {
    res.send('<h1>我们是社会主义接班人</h1>')
})

server.listen(9093, function () {
    console.log('run at port 9093')
})