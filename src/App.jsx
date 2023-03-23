import { useState } from "react";
import './App.css';

export default function App() {

  const [result, setResult] = useState("");
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [erro, setErro] = useState("");
  const [operation, setOperation] = useState("");

  const handleOperation = (event) => {
    event.preventDefault();
    console.log(operation)

    if (!n1 || !n2) {
      setErro("Digite os dois números")
      return
    }

    if (operation === "divisao" && n2 === "0") {
      setErro("Não é possível dividir por 0")
      return
    }

    if (operation === "") {
      setErro("Selecione uma operação")
      return
    }

    switch (operation) {
      case "soma":
        setResult(Number(n1) + Number(n2))
        break;
      case "subtracao":
        setResult(Number(n1) - Number(n2))
        break;
      case "multiplicacao":
        setResult(Number(n1) * Number(n2))
        break;
      case "divisao":
        setResult(Number(n1) / Number(n2))
        break;
      default:
        setResult("Selecione uma operação")
        break;
    }

    setErro("")
    setOperation("")
    setN1(result)
    setN2("")
  }


  return (
    <div>
      <h1>Calculadora</h1>
      <h2>Digite o primeiro numero da operação:</h2>
      <form onSubmit={(e) => handleOperation(e)}>
        <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} required />
        <select onChange={(e) => setOperation(e.target.value)} required value={operation}>
          <option disabled value={""}>Selecione uma operação</option>
          <option value="soma">Soma</option>
          <option value="subtracao">Subtração</option>
          <option value="multiplicacao">Multiplicação</option>
          <option value="divisao">Divisão</option>
        </select>
        <h2>Digite o segundo número da operação:</h2>
        <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} required />

        <button>
          Calcular
        </button>
      </form>
      {erro !== '' && <h2>Erro: {erro}</h2>}
      {result !== '' && <h2>Resultado: {result}</h2>}
    </div>

  )
}