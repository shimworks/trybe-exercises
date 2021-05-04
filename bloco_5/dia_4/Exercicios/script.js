let section = document.getElementById('section');
let header = document.getElementById('header');

function createButton() {
  let button =  document.createElement('button');
  header.appendChild(button)
  return button
}

let buttonBackColor1 = createButton()
buttonBackColor1.innerHTML = 'white'
let buttonBackColor2 = createButton()
buttonBackColor2.innerHTML = 'black'
let buttonBackColor3 = createButton()
buttonBackColor3.innerHTML = 'blue'