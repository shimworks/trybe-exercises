function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 01
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulListaDays = document.getElementById('days');
let holidays = [24, 25, 31];

function criaDiasNumericos() {
  for (let dia of dezDaysList) {
    let liListaDiv = document.createElement('li');
      if (dia === 24 || dia === 31) {
      liListaDiv.className = 'day holiday';
      liListaDiv.innerHTML = dia;
      ulListaDays.appendChild(liListaDiv);
    } else if (dia === 4 || dia === 11 || dia === 18) {
      liListaDiv.className = 'day friday';
      liListaDiv.innerHTML = dia;
      ulListaDays.appendChild(liListaDiv);
    } else if (dia === 25) {
      liListaDiv.className= 'day holiday friday';
      liListaDiv.innerHTML = dia;
      ulListaDays.appendChild(liListaDiv);
    } else {
      liListaDiv.className = 'day';
      liListaDiv.innerHTML = dia;
      ulListaDays.appendChild(liListaDiv);
    };
  };
};
criaDiasNumericos();

// 02
function criaBotaoHoliday() {
  let botao = document.createElement('button');
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  botao.id = 'btn-holiday';
  botao.innerHTML = 'Feriados';
  buttonContainer.appendChild(botao);
};
criaBotaoHoliday();

// 03
function clicaHoliday() {
  let botaoHoliday = document.querySelector('#btn-holiday');
  let holiday = document.getElementsByClassName('holiday');
  let backColor = 'rgb(238,238,238)';
  let novaCor = 'lightgreen';

  botaoHoliday.addEventListener('click', function () {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === novaCor) {
        holiday[index].style.backgroundColor = backColor;
      } else {
        holiday[index].style.backgroundColor = novaCor
      }
    }
  })
};
clicaHoliday();

// 04
function criaBotaoSexta() {
  let botao = document.createElement('button');
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  botao.id = 'btn-friday';
  botao.innerHTML = 'Sexta-feira';
  buttonContainer.appendChild(botao);
};
criaBotaoSexta();

// 05
function clicaSexta(sextas) {
  let botaoSexta = document.querySelector('#btn-friday');
  let sexta = document.getElementsByClassName('friday');
  let text = 'Sexta-feira'

  botaoSexta.addEventListener('click', function () {
    for (let index = 0; index < sexta.length; index += 1) {
      if (sexta[index].innerHTML === text) {
        sexta[index].innerHTML = sextas[index];
      } else {
        sexta[index].innerHTML = text
      }
    }
  })
};
let diasSextas = [4, 11, 18, 25]
clicaSexta(diasSextas);

// 06