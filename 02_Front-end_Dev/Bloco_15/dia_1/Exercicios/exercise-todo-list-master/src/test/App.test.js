import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import InputTodo from '../InputTodo';
import Item from '../Item'

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  it('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });
    
  it('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

beforeEach(() => {
  render(<App />)
});

// resolve exercicio 1
describe('testa botao de adicionar', () => {
  it('verifica se o botao existe', () => {
    const botao = screen.getByRole('button')
    expect(botao).toBeInTheDocument();
  });
  it('verifica se o botao tem o texto "Adicionar"', () => {
    const botao = screen.getByRole('button')
    expect(botao.value).toBe('Adicionar');
  });
  it('Verifica se salva a tarefa', () => {
    const text = "listadetarefa"
    const botao = screen.getByRole('button')
    const input = screen.getByLabelText('Tarefa:')
    fireEvent.change(input, {target: {value: text}})
    fireEvent.click(botao);
    const liText = screen.getByText(text)
    expect(liText).toBe(liText)
  });
});

// exercicio 02
describe('exec2', () => {
  it('verifica se a lista aparece no component "Item"', () => {
    render(<Item content={'array'}/>)
    const input = screen.getByText('array')
    expect(input).toBeInTheDocument();
    expect(input.innerHTML).toBe('array');
  });
});

// exercicio 03