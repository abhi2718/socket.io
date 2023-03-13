const express = require('express'),
    http = require('http'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 4001;

const server = http.createServer(app);
// const io = require('socket.io')(server, {
//     cors: {
//         origin: ""
//     }
// });
const io = require('socket.io')(server);
app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
    console.log(socket.id, "has connected");
    socket.on("/test", (msg) => { 
        console.log("/test",msg);
     socket.emit('/res',"Hello flutter!");
    });
});

server.listen(port,"0.0.0.0",()=>console.log('listening on port 4001'));