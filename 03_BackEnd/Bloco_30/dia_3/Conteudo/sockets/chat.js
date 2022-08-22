module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');
  socket.on('clientMessage', (msg) => {
    console.log(`Mensagem ${msg}`);
    io.emit('serverMessage', msg);
  })
})