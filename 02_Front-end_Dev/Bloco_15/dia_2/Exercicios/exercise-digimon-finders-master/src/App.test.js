import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />)
})


describe('Teste da aplicação toda', () => {
  
  it('renders App', async () => {
    const linkElement = screen.getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('testa input', async () => {
    const inpText = screen.getByTestId('input')
    expect(inpText).toHaveValue('')
    fireEvent.change(inpText, { target: {value: 'Agumon'}});
    expect(inpText).toHaveValue('Agumon')
  });
  
  it('testa botao', () => {
    const inpButton = screen.getByTestId('buttonSearch');
    expect(inpButton).toBeInTheDocument();
  });
  
  it('testa fetch', async () => {
    const digimon = [{
    name:"Koromon",
    img:"https://digimon.shadowsmith.com/img/koromon.jpg",
    level:"In Training",
    }]
    global.fetch = jest.fn( async () => ({
      json: async () => digimon
    }))
    const inpButton = screen.getByTestId('buttonSearch');
    const inpText = screen.getByTestId('input')
    fireEvent.change(inpText, { target: {value: 'Koromon'}});
    fireEvent.click(inpButton);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Koromon')
  });

});