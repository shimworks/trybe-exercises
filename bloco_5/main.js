const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/
divUm.addEventListener('click', adicionaClasse);
divDois.addEventListener('click', adicionaClasse);
divTres.addEventListener('click', adicionaClasse);
function adicionaClasse(classe) {
  let elementoSelecionado = document.querySelector('.tech');
  elementoSelecionado.classList.remove('tech');
  classe.target.classList.add('tech');
}
 /*Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/
input.addEventListener('input', adicionaClasse) // é possivel usar a mesma função.
 /*Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?*/
myWebpage.addEventListener('dblclick', doubleClick, 'mouseover', alteraCor);
function doubleClick () {
  window.open('https://github.com/shimworks/shimworks.github.io');
}
 /*Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;*/
myWebpage.addEventListener('mouseover', alteraCor)
myWebpage.addEventListener('mouseleave', alteraCorDeVolta)
function alteraCor(local) {
  local.target.style.color = 'lightblue'
}
function alteraCorDeVolta(local) {
  local.target.style.color = 'unset'
}
/*Segue abaixo um exemplo do uso de event.target:
*/


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.