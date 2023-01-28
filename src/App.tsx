import { ReactNode } from 'react'
import './App.scss'
interface Props {
  children?:ReactNode
  // any props that come into the component
}

function App({children}:Props) {

  return (
    <div className="App">
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default App
