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

  function testesAdicao (){
    it('Deve somar 4 + 7 e o resultado deverá mostrar 11 corretamente', async () => {
      // Clique nos botões para inserir os números e operador
      const button1 = screen.getByTestId('4');
      fireEvent.click(button1);
  
      const button2 = screen.getByTestId('+');
      fireEvent.click(button2);
  
      const button3 = screen.getByTestId('7');
      fireEvent.click(button3);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('11');
    });
  
    it('Deve somar 12 + 75 e o resultado deverá mostrar 87 corretamente', async () => {
      const button1 = screen.getByTestId('1');
      fireEvent.click(button1);
      const button2 = screen.getByTestId('2');
      fireEvent.click(button2);
  
      const button3 = screen.getByTestId('+')
      fireEvent.click(button3);
  
      const button4 = screen.getByTestId('7');
      fireEvent.click(button4);
      const button5 = screen.getByTestId('5');
      fireEvent.click(button5);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('87');
    })
  
    it('Deve somar 269 + 262 e o resultado deverá mostrar 531 corretamente', async () => {
      const button1 = screen.getByTestId('2');
      fireEvent.click(button1);
      const button2 = screen.getByTestId('6');
      fireEvent.click(button2);
      const button3 = screen.getByTestId('9')
      fireEvent.click(button3);
  
      const button4 = screen.getByTestId('+');
      fireEvent.click(button4);
  
      const button6 = screen.getByTestId('2');
      fireEvent.click(button6);
      const button7 = screen.getByTestId('6');
      fireEvent.click(button7);
      const button8 = screen.getByTestId('2');
      fireEvent.click(button8);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('531');
    })
  
    it('Deve somar 77066 + 36733 e o resultado deverá mostrar 113799 corretamente', async () => {
      
      const array1 = ['7','7','0','6','6'];
      const array2 = ['3','6','7','3','3'];
  
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonSum = screen.getByTestId('+');
      fireEvent.click(buttonSum);
  
      array2.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('113799');
    })
  
    it('Deve somar 467691 + 479501 e o resultado deverá mostrar 947192 corretamente', async () => {
      
      const array1 = ['4','6','7','6','9','1'];
      const array2 = ['4','7','9','5','0','1'];
  
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonSum = screen.getByTestId('+');
      fireEvent.click(buttonSum);
  
      array2.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('947192');
    })
  }
  function testesSubtracao (){
    it('Deve subtrair 4 - 1 e o resultado deverá mostrar 3 corretamente', async () => {
      // Clique nos botões para inserir os números e operador
      const button1 = screen.getByTestId('4');
      fireEvent.click(button1);
  
      const button2 = screen.getByTestId('-');
      fireEvent.click(button2);
  
      const button3 = screen.getByTestId('1');
      fireEvent.click(button3);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('3');
    });
  
    it('Deve subtrair 23 - 67 e o resultado deverá mostrar -44 corretamente', async () => {
      const button1 = screen.getByTestId('2');
      fireEvent.click(button1);
      const button2 = screen.getByTestId('3');
      fireEvent.click(button2);
  
      const button3 = screen.getByTestId('-')
      fireEvent.click(button3);
  
      const button4 = screen.getByTestId('6');
      fireEvent.click(button4);
      const button5 = screen.getByTestId('7');
      fireEvent.click(button5);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('-44');
    })
  
    it('Deve subtrair 693 - 166 e o resultado deverá mostrar 527 corretamente', async () => {
      const button1 = screen.getByTestId('6');
      fireEvent.click(button1);
      const button2 = screen.getByTestId('9');
      fireEvent.click(button2);
      const button3 = screen.getByTestId('3')
      fireEvent.click(button3);
  
      const button4 = screen.getByTestId('-');
      fireEvent.click(button4);
  
      const button6 = screen.getByTestId('1');
      fireEvent.click(button6);
      const button7 = screen.getByTestId('6');
      fireEvent.click(button7);
      fireEvent.click(button7);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('527');
    })
  
    it('Deve subtrair 467691 - 479501 e o resultado deverá mostrar -2255 corretamente', async () => {
      
      const array1 = ['5','1','0','9','3'];
      const array2 = ['5','3','3','4','8'];
  
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonSum = screen.getByTestId('-');
      fireEvent.click(buttonSum);
  
      array2.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('-2255');
    })
  
    it('Deve subtrair 467691 - 479501 e o resultado deverá mostrar -2255 corretamente', async () => {
      
      const array1 = ['4','6','0','5','1','1'];
      const array2 = ['6','8','1','3','0','1'];
  
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonSum = screen.getByTestId('-');
      fireEvent.click(buttonSum);
  
      array2.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('-220790');
    })
    
  }
  function testesMultiplicacao(){
    it('Deve multiplicar 1 x 1 e o resultado deverá mostrar 1 corretamente', async () => {
      // Clique nos botões para inserir os números e operador
      const button1 = screen.getByTestId('1');
      fireEvent.click(button1);
  
      const button2 = screen.getByTestId('x');
      fireEvent.click(button2);
  
      const button3 = screen.getByTestId('1');
      fireEvent.click(button3);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('1');
    });
  
    it('Deve multiplicar 68 x 12 e o resultado deverá mostrar 816 corretamente', async () => {
      const button1 = screen.getByTestId('6');
      fireEvent.click(button1);
      const button2 = screen.getByTestId('8');
      fireEvent.click(button2);
  
      const button3 = screen.getByTestId('x')
      fireEvent.click(button3);
  
      const button4 = screen.getByTestId('1');
      fireEvent.click(button4);
      const button5 = screen.getByTestId('2');
      fireEvent.click(button5);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('816');
    })
  
    it('Deve multiplicar 544 + 620 e o resultado deverá mostrar 337280 corretamente', async () => {
      const button1 = screen.getByTestId('5');
      fireEvent.click(button1);
      const button2 = screen.getByTestId('4');
      fireEvent.click(button2);
      const button3 = screen.getByTestId('4')
      fireEvent.click(button3);
  
      const button4 = screen.getByTestId('x');
      fireEvent.click(button4);
  
      const button6 = screen.getByTestId('6');
      fireEvent.click(button6);
      const button7 = screen.getByTestId('2');
      fireEvent.click(button7);
      const button8 = screen.getByTestId('0');
      fireEvent.click(button8);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('337280');
    })
  
    it('Deve multiplicar 30736 + 46802 e o resultado deverá mostrar 1438506272 corretamente', async () => {
      
      const array1 = ['3','0','7','3','6'];
      const array2 = ['4','6','8','0','2'];
  
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonSum = screen.getByTestId('x');
      fireEvent.click(buttonSum);
  
      array2.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('1438506272');
    })
  
    it('Deve multiplicar 624256 + 501929 e o resultado deverá mostrar 313332189824 corretamente', async () => {
      
      const array1 = ['6','2','4','2','5','6'];
      const array2 = ['5','0','1','9','2','9'];
  
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonSum = screen.getByTestId('x');
      fireEvent.click(buttonSum);
  
      array2.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('313332189824');
    })
  }
  function testesDivisao(){
    it('Deve dividir 2 / 6 e o resultado deverá mostrar 0.3333333333333333 corretamente', async () => {
      // Clique nos botões para inserir os números e operador
      const button1 = screen.getByTestId('2');
      fireEvent.click(button1);
  
      const button2 = screen.getByTestId('/');
      fireEvent.click(button2);
  
      const button3 = screen.getByTestId('6');
      fireEvent.click(button3);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('0.3333333333333333');
    });
  
    it('Deve dividir 96 / 12 e o resultado deverá mostrar 8 corretamente', async () => {
      const button1 = screen.getByTestId('9');
      fireEvent.click(button1);
      const button2 = screen.getByTestId('6');
      fireEvent.click(button2);
  
      const button3 = screen.getByTestId('/')
      fireEvent.click(button3);
  
      const button4 = screen.getByTestId('1');
      fireEvent.click(button4);
      const button5 = screen.getByTestId('2');
      fireEvent.click(button5);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('8');
    })
  
    it('Deve dividir 236 / 125 e o resultado deverá mostrar 1.888 corretamente', async () => {
      const button1 = screen.getByTestId('2');
      fireEvent.click(button1);
      const button2 = screen.getByTestId('3');
      fireEvent.click(button2);
      const button3 = screen.getByTestId('6')
      fireEvent.click(button3);
  
      const button4 = screen.getByTestId('/');
      fireEvent.click(button4);
  
      const button6 = screen.getByTestId('1');
      fireEvent.click(button6);
      const button7 = screen.getByTestId('2');
      fireEvent.click(button7);
      const button8 = screen.getByTestId('5');
      fireEvent.click(button8);
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('1.888');
    })
  
    it('Deve dividir 25625 + 25625 e o resultado deverá mostrar 1 corretamente', async () => {
      
      const array1 = [2,5,6,2,5];
      
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonSum = screen.getByTestId('/');
      fireEvent.click(buttonSum);
  
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('1');
    })
  
    it('Deve dividir 650155 / 100000 e o resultado deverá mostrar 6,50155 corretamente', async () => {
      
      const array1 = ['6','5','0','1','5','5'];
      const array2 = ['1','0','0','0','0','0'];
  
      array1.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonSum = screen.getByTestId('/');
      fireEvent.click(buttonSum);
  
      array2.forEach(e => {
        let button = screen.getByTestId(e)
        fireEvent.click(button);
      });
  
      const buttonEqual = screen.getByTestId('=');
      fireEvent.click(buttonEqual);
  
      // Verifique se o resultado está correto
      const result = await screen.getByTestId('result');
      expect(result.textContent).toBe('6.50155');
    })
  }
  testesAdicao()
  testesSubtracao()
  testesMultiplicacao()
  testesDivisao()
});





