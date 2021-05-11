const dropdown = document.getElementById('dropdown-estado')

function optionCreator() {
  const estados = ['Paraná', 'São Paulo', "Minas Gerais"]
  for (let index = 0; index < estados.length; index += 1) {
    const dropOption = document.createElement('option')
    dropOption.innerHTML = estados[index]
    dropdown.appendChild(dropOption)
  }
}
optionCreator();