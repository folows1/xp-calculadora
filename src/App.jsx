
export default function App() {

  return (
    <main className="min-h-screen">
      <h1 className="text-black text-3xl text-center py-9">
        Calculator
      </h1>

      <div className="flex flex-col w-80 mx-auto h-[500px] border-2 border-black rounded shadow-md bg-cyan-900">
        <div className="h-1/3 bg-cyan-900 w-full">
          a
        </div>
        <div className="h-1 bg-cyan-500 w-full rounded"></div>
        
        <div className="h-full bg-cyan-800 w-full">
          <div className="w-full flex flex-row justify-between pt-4">
            <button className="w-1/4 h-full bg-cyan-800 text-orange-400 text-2xl">C</button>
            <button className="w-1/4 h-full bg-cyan-800 text-cyan-500 text-2xl">/</button>
          </div>
        </div>
      </div>
    </main>
  )
}