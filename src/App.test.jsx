import '@testing-library/jest-dom';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe('Teste do componente App', () => {

  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Deve renderizar o componente App corretamente', () => {
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  });

  it('Deve somar 12 + 12 e 24 corretamente', async () => {
    // Clique nos botões para inserir os números e operador
    const button1 = screen.getByTestId('1');
    fireEvent.click(button1);

    const button2 = screen.getByTestId('2');
    fireEvent.click(button2);

    const button5 = screen.getByTestId('+');
    fireEvent.click(button5);

    fireEvent.click(button1);
    fireEvent.click(button2);

    const buttonEqual = screen.getByTestId('=');
    fireEvent.click(buttonEqual);

    // Verifique se o resultado está correto
    const result = await screen.getByTestId('result');
    expect(result.textContent).toBe('24');
  });

  it('Deve somar 11+22 e exibir 33 corretamente', async () => {
    const button1 = screen.getByTestId('1');
    fireEvent.click(button1);
    fireEvent.click(button1);

    const button5 = screen.getByTestId('+');
    fireEvent.click(button5);

    const button2 = screen.getByTestId('2');
    fireEvent.click(button2);
    fireEvent.click(button2);

    const buttonEqual = screen.getByTestId('=');
    fireEvent.click(buttonEqual);

    // Verifique se o resultado está correto
    const result = await screen.getByTestId('result');
    expect(result.textContent).toBe('33');
  })
});





