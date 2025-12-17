import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 overflow-hidden">
      <h1 className="text-4xl font-bold mb-4">Vite + React + TailwindCSS</h1>
   </div>
  )
}

export default App
