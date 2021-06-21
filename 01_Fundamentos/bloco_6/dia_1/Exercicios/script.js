
function optionCreator() {
  const dropdown = document.getElementById('dropdown-estado');
  const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < estados.length; index += 1) {
    const dropOption = document.createElement('option');
    dropdown.appendChild(dropOption).value = estados[index];
    dropdown.appendChild(dropOption).innerHTML = estados[index];
  }
}
optionCreator();

function dateValidation(input, name) {
  if (input.value.length === 0) {
    return {
      message: 'A data não foi preenchida!'
    };
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
  if (!regex.test(input.value)) {
    return {
      message: 'Data: Formato inválido'
    };
  }

  let splitted = input.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if (day < 0 || day > 30) {
    return {
      message: 'Dia Inválido'
    };
  }
  if (month < 0 || month > 12) {
    return {
      message: 'Mes inválido'
    };
  }
  if (year < 0) {
    return {
      message: 'Ano inválido'
    };
  }

  return true;
}

function handleSubmit(event) {
  event.preventDefault();
  let validation = validateData();
  clearDivs();

  if (validation.errorQtd === 0) {
    renderData();
  } else {
    validation.messages.unshift('Dados Inválidos');
    renderErrorMessages(validation.messages);
  }
}