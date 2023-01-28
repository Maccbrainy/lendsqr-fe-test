import { ReactNode, useState } from 'react'
import './App.scss'
interface Props {
  children?:ReactNode
  // any props that come into the component
}

function App({children}:Props) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button className='appStyle' type='button' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
