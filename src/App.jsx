import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState()
  const [result, setResult] = useState(0)
  const [telaOperacao, setTelaOperacao] = useState('')

  function inputNum(numberP) {
    numberP = numberP.toString()
    if (num === 0) {
      setNum(numberP)
      setTelaOperacao(telaOperacao + numberP)
    } else {
      setNum(num + numberP)
      setTelaOperacao(telaOperacao + numberP)
    }
  }

  function clear() {
    setNum(0)
    setNum2(0)
    setTelaOperacao('')
    setResult(0)
  }

  function selectOperator(op) {
    let aux = op
    let aux2 = telaOperacao.length

    if (telaOperacao.charAt(aux2 - 1) === '+' || telaOperacao.charAt(aux2 - 1) === '-' ||
      telaOperacao.charAt(aux2 - 1) === '*' || telaOperacao.charAt(aux2 - 1) === '/') {
      setTelaOperacao(telaOperacao.substring(0, aux2 - 1) + aux)
    } else {
      setOperator(aux)
      setNum2(num)
      setNum(0)
      setTelaOperacao(`${telaOperacao}${aux}`)
    }

  }

  function calculate() {
    let newResult = 0
    if (operator === '+') {
      newResult = parseFloat(num2) + parseFloat(num)
    } else if (operator === '-') {
      newResult = parseFloat(num2) - parseFloat(num)
    } else if (operator === '/') {
      newResult = parseFloat(num2) / parseFloat(num)
    } else {
      newResult = parseFloat(num2) * parseFloat(num)
    }
    setResult(prevResult => prevResult + newResult)
    setNum2(newResult)
    setNum(0)
  }

  return (
    <main className="min-h-screen py-10">
      <div className="flex flex-col w-72 mx-auto h-fit border-2 border-black rounded shadow-md bg-cyan-900">
        <div className="h-max bg-sky-900 w-full flex flex-col">
          <p className="text-center text-white font-bold text-base py-2">
            Calculator
          </p>
          <div className="h-full w-full pt-14 pb-7 flex flex-col items-end pr-3 min-h-[140px]">
            <div className="text-white text-sm">
              {telaOperacao}
            </div>
            <div className="text-white text-3xl font-bold" id="result" data-testid="result">
              {result}
            </div>
          </div>

        </div>
        <div className="h-[2px] bg-cyan-500 w-full rounded"></div>

        <div className="h-max bg-sky-800 w-full text-white">

          <div className="w-full flex flex-row justify-between">
            <div className="w-1/4 text-orange-400 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={clear}>C</div>
            <div className="w-1/4 text-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => selectOperator('/')}>/</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <div id="1" data-testid="1" className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(1)}>1</div>
            <div id="2" data-testid="2" className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(2)}>2</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(3)}>3</div>
            <div className="w-1/4 text-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => selectOperator('x')}>x</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(4)}>4</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(5)}>5</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(6)}>6</div>
            <div id="+" data-testid="+" className="w-1/4 text-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => selectOperator('+')}>+</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(7)}>7</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(8)}>8</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(9)}>9</div>
            <div className="w-1/4 text-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => selectOperator('-')}>-</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <div className="w-3/4 flex justify-center">
              <div className="w-1/3 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={() => inputNum(0)}>
                0
              </div>
            </div>
            <div id="=" data-testid="=" className="w-1/4 bg-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900" onClick={calculate}>=</div>
          </div>
        </div>
      </div>
    </main>
  )
}