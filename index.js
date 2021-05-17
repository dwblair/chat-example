const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});


var i = 0;

setInterval(function(){ 

  i=i+1;
  console.log("hi");
  console.log(i.toString());
  io.emit('chat message', i.toString());

},1000) //every second


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
