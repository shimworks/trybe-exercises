import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

beforeEach(() => {
  const digimon = [{
    name:"Koromon",
    img:"https://digimon.shadowsmith.com/img/koromon.jpg",
    level:"In Training",
    }]
  render(<Digimon digimon={digimon}/>)
})


describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const dName = screen.getByTestId('digimonName');
    const dLevel = screen.getByTestId('digimonLevel');
    const dImg = screen.getByRole('img');
    expect(dName).toBeInTheDocument();
    expect(dLevel).toBeInTheDocument();
    expect(dImg).toBeInTheDocument();
  });
});