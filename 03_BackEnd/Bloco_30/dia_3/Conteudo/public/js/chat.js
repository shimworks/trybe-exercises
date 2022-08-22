const socket = window.io();

const form = document.querySelector('form')
const input = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', input.value);
  input.value = "";
  return false
})

const createMessage = (msg) => {
  const messageUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = msg
  messageUl.appendChild(li)
};

socket.on('serverMessage', (msg) => createMessage(msg))