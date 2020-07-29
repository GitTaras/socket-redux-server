const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => { 
	socket.on('get_time', () => socket.emit('update_time', new Date().toLocaleTimeString()));
	socket.on('disconnect', (reason) => console.log(`client lost case of ${reason}`));
});


server.listen(3030); 