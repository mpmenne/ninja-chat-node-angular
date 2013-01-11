var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')

app.listen(8003);

function handler (req, res) {
    fs.readFile(__dirname + '/chat.js',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function (socket) {
    console.log('connected!');
    socket.on('new ninja', function (data) {
        var newNinjaMessage =
            {name: "masterNinja", msg: "Hey, " + data + " is looking for a fight!"};
        socket.emit("update ninjas", {name:"masterNinja", msg:"You're in ... for now"});
        socket.broadcast.emit("update ninjas", newNinjaMessage);
    });
    socket.on('new message', function(data) {
        console.log('got the message');
        var message = {name: data.name, msg: data.msg };
        socket.broadcast.emit("update ninjas", message);
    })
});