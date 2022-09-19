import express from "express";
import http from "http";
import path from 'path';
import { Server } from "socket.io";






// ko thêm dòng này là có bug
const __dirname = path.resolve();



const app = express();
const server = http.createServer(app);

const io = new Server(server);
io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('on-chat', data => {
        io.emit('user-chat', data)
    });
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

server.listen(3000, () => {
    console.log("Listening on port 3000");
})
