import { useState } from "react";

export default function App() {
  const [resultado, setResultado] = useState("");
  const [operacao, setOperacao] = useState("");
  return (
    <main className="min-h-screen py-10">
      <div className="flex flex-col w-72 mx-auto h-fit border-2 border-black rounded shadow-md bg-cyan-900">
        <div className="h-max bg-sky-900 w-full flex flex-col">
          <p className="text-center text-white font-bold text-base py-2">
            Calculator
          </p>
          <div className="h-full w-full pt-14 pb-7 flex flex-col items-end pr-3 min-h-[140px]">
            <div className="text-white text-sm">
              {operacao}
            </div>
            <div className="text-white text-3xl font-bold">
              {resultado}
            </div>
          </div>

        </div>
        <div className="h-[2px] bg-cyan-500 w-full rounded"></div>

        <div className="h-max bg-sky-800 w-full text-white">

          <div className="w-full flex flex-row justify-between">
            <div className="w-1/4 text-orange-400 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">C</div>
            <div className="w-1/4 text-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">/</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">1</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">2</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">3</div>
            <div className="w-1/4 text-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">x</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">4</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">5</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">6</div>
            <div className="w-1/4 text-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">+</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">7</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">8</div>
            <div className="w-1/4 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">9</div>
            <div className="w-1/4 text-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">-</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <div className="w-3/4 flex justify-center">
              <div className="w-1/3 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">
                0
              </div>
            </div>
            <div className="w-1/4 bg-cyan-500 text-2xl text-center px-2 py-4 cursor-pointer hover:bg-sky-900">=</div>
          </div>
        </div>
      </div>
    </main>
  )
}